import { NavLink } from "react-router-dom";
import { Bell, SquareArrowRightExit } from 'lucide-react';
import logo from "@assets/logo.svg";
import styled from '@emotion/styled';
import { themeTokens } from "@shared/hooks/use-theme";
import ThemeSwitcher from "./theme-switcher";

const TopBar = styled.div`
    background-color: hsl(${themeTokens.backgroundColors.panel});
    color: hsl(${themeTokens.textColors.primary});
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

const Navigation = styled.nav`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 1rem;
`;

const MenuItems = styled.ul`
    list-style: none;
    display: flex;
    gap: 1rem;
    height: 3rem;
    align-items: center;
`;

const NavLinkStyled = styled(NavLink)`
    color: hsl(${themeTokens.textColors.primary});
    text-decoration: none;
    &.active {
        font-weight: bold;
    }
`;

const Notifications = styled.ul`
    list-style: none;
    display: flex;
    gap: 1rem;
    height: 3rem;
    align-items: center;
    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    a {
    color: hsl(${themeTokens.textColors.primary});
`;

const Logo = styled.img`
    height: 3rem;
`;

export default function NavigationComponent() {

    return (<TopBar>
        <Navigation>
            <NavLinkStyled to="/">
                <Logo src={logo} alt="Project FollowUp Logo" />
            </NavLinkStyled>
            <MenuItems>
                <li><NavLinkStyled to="/">Home</NavLinkStyled></li>
                <li><NavLinkStyled to="/projects">Projects</NavLinkStyled></li>
                <li><NavLinkStyled to="/users">Users</NavLinkStyled></li>
                <li><NavLinkStyled to="/projects/create">Create project</NavLinkStyled></li>
            </MenuItems>
            <Notifications>
                <Bell />
                <NavLinkStyled to="/logout"><SquareArrowRightExit /></NavLinkStyled>
                <ThemeSwitcher />
            </Notifications>
        </Navigation>
    </TopBar>);
}