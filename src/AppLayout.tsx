import { Outlet } from "react-router-dom";
import { LandingPage } from "./pages/landing-page/landing-page";
import './AppLayout.scss'
import NavigationComponent from "./layout-elements/navigation";
import FooterComponent from "./layout-elements/footer";

export default function AppLayoutComponent() {
  const { isAuthenticated } = { isAuthenticated: false };

  const mainClassName = isAuthenticated ? 'app-layout' : 'landing-page';

  return (
    <main className={mainClassName}>
      {isAuthenticated && <NavigationComponent />}
      <div>
        {!isAuthenticated && <LandingPage />}
        {isAuthenticated && <Outlet />}
      </div>
      {isAuthenticated && <FooterComponent />}
    </main>
  );
}
