import { NavLink, Outlet } from "react-router-dom";
import { LandingPage } from "@pages/landing-page/landing-page";
import NavigationComponent from "@shared/components/top-bar/navigation";
import FooterComponent from "@shared/components/footer";
import { useAuth } from "@shared/hooks/use-auth";
import styled from '@emotion/styled';
import { themeTokens } from "@shared/types/themes";
import logo from "@assets/logo.svg";
import OperationsComponent from "@shared/components/top-bar/operations";

const AppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const TopBar = styled.div`
  background-color: hsl(${themeTokens.backgroundColors.secondary});
`;

const TopBarContent = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  gap: 0.5em;
  grid-template-columns: auto 1fr auto;
  justify-content: space-between;
`;

const PageTitle = styled.h1`
  display: none;
`;

const Logo = styled.img`
  height: 4em;
`;

const BodyContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default function AppLayoutComponent() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return (<main className='landing-page'>
      <LandingPage />
    </main>);
  }

  return (
    <AppLayout>
      <TopBar>
        <TopBarContent>
          <NavLink to="/">
            <PageTitle>Project Follow-Up</PageTitle>
            <Logo src={logo} alt="Project FollowUp Logo" />
          </NavLink>
          <NavigationComponent />
          <OperationsComponent />
        </TopBarContent>
      </TopBar>
      <BodyContainer>
        <Outlet />
      </BodyContainer>
      <FooterComponent />
    </AppLayout>);
}
