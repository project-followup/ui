import Keycloak from "keycloak-js";
import { type AuthContextValue, type KeycloakUser, AuthContext } from "@shared/types/auth";
import { type ReactNode, useEffect, useState } from "react";
import { useConfig } from "@shared/hooks/use-config";
import { authenticateUser, getCurrentUser, hasAnyRole, hasRole, initializeKeycloak, logout } from "@shared/services/auth";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<KeycloakUser | null>(null);
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null);
  
  const config = useConfig();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const keycloakInstance = initializeKeycloak(config);
        setKeycloak(keycloakInstance);

        const authenticated = await authenticateUser(keycloakInstance);
        setIsAuthenticated(authenticated);

        if (authenticated) {
          const currentUser = getCurrentUser(keycloakInstance);
          setUser(currentUser);
        }
      } catch (error) {
        console.error('Failed to initialize authentication:', error);
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, [config]);

  const handleLogin = () => {
    if (keycloak) {
      keycloak.login();
    }
  };

  const handleLogout = () => {
    if (keycloak) {
      logout(keycloak);
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const checkRole = (role: string): boolean => {
    return keycloak ? hasRole(keycloak, role) : false;
  };

  const checkAnyRole = (roles: string[]): boolean => {
    return keycloak ? hasAnyRole(keycloak, roles) : false;
  };

  const getToken = (): string | null => {
    return keycloak?.token || null;
  };

  const contextValue: AuthContextValue = {
    isAuthenticated,
    isLoading,
    user,
    keycloak,
    login: handleLogin,
    logout: handleLogout,
    hasRole: checkRole,
    hasAnyRole: checkAnyRole,
    getToken,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}