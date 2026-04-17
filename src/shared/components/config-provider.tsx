import { type ApplicationConfiguration, ConfigContext } from "@shared/types/configuration";
import { useEffect, useState, type FC, type ReactNode } from "react";
import LoadingSpinner from "./loading-spinner";

export const ConfigProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<ApplicationConfiguration | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/configuration.json")
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load configuration: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then(setConfig)
      .catch(() => {
        setError("Failed to load config.");
      });
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!config) {
    return <LoadingSpinner message="Loading config..." />
  }

  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
};