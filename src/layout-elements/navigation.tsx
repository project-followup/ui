import { NavLink } from "react-router-dom";
import logo from "@assets/logo.svg";
import styled from '@emotion/styled';
import { themeTokens } from "@shared/hooks/use-theme";

const TopBar = styled.div`
    background-color: hsl(${themeTokens.backgroundColors.panel});
    color: hsl(${themeTokens.textColors.primary});
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

const Navigation = styled.nav`
    width: 80%;
    margin: 0 auto;
    display: flex;
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

const Logo = styled.img`
    height: 3rem;
`;

export default function NavigationComponent() {

    return (<TopBar>
        <Navigation>
            <Logo src={logo} alt="Project FollowUp Logo" />
            <MenuItems>
                <li><NavLinkStyled to="/">Home</NavLinkStyled></li>
                <li><NavLinkStyled to="/about">About</NavLinkStyled></li>
                <li><NavLinkStyled to="/contact">Contact</NavLinkStyled></li>
                <li><NavLinkStyled to="/logout">Logout</NavLinkStyled></li>
            </MenuItems>
        </Navigation>
    </TopBar>);
}