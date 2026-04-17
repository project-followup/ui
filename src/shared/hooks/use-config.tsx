import { ConfigContext } from "@shared/components/config-provider";
import { useContext } from "react";

export const useConfig = () => {
  const config = useContext(ConfigContext);
  if (!config) {
    throw new Error("useConfig must be used within ConfigProvider");
  }
  return config;
};