import Keycloak from 'keycloak-js';

export interface KeycloakUser {
  id: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  roles: string[];
}

export interface AuthContextValue {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: KeycloakUser | null;
  keycloak: Keycloak | null;
  login: () => void;
  logout: () => void;
  hasRole: (role: string) => boolean;
  hasAnyRole: (roles: string[]) => boolean;
  getToken: () => string | null;
}