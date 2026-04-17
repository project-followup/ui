import { createContext } from "react";

export interface KeycloakConfiguration {
  url: string;
  realm: string;
  clientId: string;
}

export interface ApplicationConfiguration {
  keycloak: KeycloakConfiguration;
}

export const ConfigContext = createContext<ApplicationConfiguration | null>(null);
