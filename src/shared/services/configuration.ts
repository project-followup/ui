import * as model from "../types/configuration";

let config: model.ApplicationConfiguration;

export async function loadConfiguration(): Promise<model.ApplicationConfiguration> {
  const response = await fetch('/configuration.json');
  config = await response.json();
  return config;
}

export function isConfigLoaded(): boolean {
  return !!config;
}

export default function getConfig(): model.ApplicationConfiguration {
  if (!config) {
    throw new Error('Config not loaded yet!');
  }
  return config;
}
