import { NavLink } from "react-router-dom";
import { Bell, SquareArrowRightExit } from 'lucide-react';
import logo from "@assets/logo.svg";
import styled from '@emotion/styled';
import { themeTokens } from "@shared/hooks/use-theme";
import ThemeSwitcher from "./theme-switcher";

const TopBar = styled.div`
    background-color: hsl(${themeTokens.backgroundColors.panel});
    color: hsl(${themeTokens.textColors.primary});
`;

const Navigation = styled.nav`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 1rem;
`;

const MenuItems = styled.div`
    list-style: none;
    display: flex;
`;

const NavLinkStyled = styled(NavLink)`
    color: hsl(${themeTokens.textColors.primary});
    text-decoration: none;
    vertical-align: middle;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    &.active {
        font-weight: bold;
    }

    &:hover {
        background-color: hsl(${themeTokens.backgroundColors.panelHover});
    }
`;

const Notifications = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`;

const Logo = styled.img`
    height: 4rem;
`;

export default function NavigationComponent() {

    return (<TopBar>
        <Navigation>
            <NavLink to="/">
                <Logo src={logo} alt="Project FollowUp Logo" />
            </NavLink>
            <MenuItems>
                <NavLinkStyled to="/">Home</NavLinkStyled>
                <NavLinkStyled to="/projects">Projects</NavLinkStyled>
                <NavLinkStyled to="/users">Users</NavLinkStyled>
                <NavLinkStyled to="/projects/create">Create project</NavLinkStyled>
            </MenuItems>
            <Notifications>
                <NavLinkStyled to="/logout"><SquareArrowRightExit /></NavLinkStyled>
                <NavLinkStyled to="/notifications"><Bell /></NavLinkStyled>
                <ThemeSwitcher />
            </Notifications>
        </Navigation>
    </TopBar>);
}