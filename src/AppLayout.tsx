import { Outlet } from "react-router-dom";
import { LandingPage } from "./pages/landing-page/landing-page";
import './AppLayout.scss'
import NavigationComponent from "./layout-elements/navigation";
import FooterComponent from "./layout-elements/footer";
import { useAuth } from "@shared/hooks/use-auth";
import styled from '@emotion/styled';

const BodyContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 1rem;
`;

export default function AppLayoutComponent() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return (<main className='landing-page'>
      <LandingPage />
    </main>);
  }

  return (
    <main className='app-layout'>
      <NavigationComponent />
      <BodyContainer>
        <Outlet />
      </BodyContainer>
      <FooterComponent />
    </main>);
}
