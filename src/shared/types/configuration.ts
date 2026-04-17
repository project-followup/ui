export interface KeycloakConfiguration {
  url: string;
  realm: string;
  clientId: string;
}

export interface ApplicationConfiguration {
  keycloak: KeycloakConfiguration;
}
