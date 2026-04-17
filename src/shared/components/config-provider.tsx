import type { ApplicationConfiguration } from "@shared/types/configuration";
import { createContext, useEffect, useState } from "react";
import LoadingSpinner from "./loading-spinner";

export const ConfigContext = createContext<ApplicationConfiguration | null>(null);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<ApplicationConfiguration | null>(null);

  useEffect(() => {
    fetch("/configuration.json")
      .then(res => res.json())
      .then(setConfig);
  }, []);

  if (!config) {
    return <LoadingSpinner message="Loading config..." />
  }

  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
};