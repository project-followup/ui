import { Outlet } from "react-router-dom";
import { LandingPage } from "./pages/landing-page/landing-page";
import ThemeSwitcher from "./theme-switcher";

export default function AppLayoutComponent() {
  const { isAuthenticated } = { isAuthenticated: false };
  return (
    <>
        <ThemeSwitcher />
        {!isAuthenticated && <LandingPage />}
        {isAuthenticated && <Outlet />}
    </>
  );
}
