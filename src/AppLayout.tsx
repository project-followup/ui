import { Outlet } from "react-router-dom";
import { LandingPage } from "./pages/landing-page/landing-page";

export default function AppLayoutComponent() {
  const { isAuthenticated } = { isAuthenticated: false };
  return (
    <>
        {!isAuthenticated && <LandingPage />}
        {isAuthenticated && <Outlet />}
    </>
  );
}
