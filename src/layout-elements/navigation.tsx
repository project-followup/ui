import { useAuth } from "@shared/hooks/use-auth";
import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';

const Navigation = styled.nav`
    background-color: hsl(var(--backgroundColors-panel));
    color: hsl(var(--textColors-primary));
    padding: 1rem;
    display: flex;
    gap: 1rem;
`;

const NavLinkStyled = styled(NavLink)`
    color: hsl(var(--textColors-primary));
    text-decoration: none;
    &.active {
        font-weight: bold;
    }
`;

export default function NavigationComponent() {
    const { logout } = useAuth();

    return (<Navigation>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/about">About</NavLinkStyled>
        <NavLinkStyled to="/contact">Contact</NavLinkStyled>
        <NavLinkStyled to="#" onClick={logout}>Logout</NavLinkStyled>
    </Navigation>);
}