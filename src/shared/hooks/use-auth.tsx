import { AuthContext } from "@shared/components/auth-provider";
import type { AuthContextValue } from "@shared/types/auth";
import { useContext } from "react";

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
