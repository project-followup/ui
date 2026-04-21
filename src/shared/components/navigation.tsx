import { NavLink } from "react-router-dom";
import { Bell, SquareArrowRightExit } from 'lucide-react';
import logo from "@assets/logo.svg";
import styled from '@emotion/styled';

const TopBar = styled.div`
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
    text-decoration: none;
    vertical-align: middle;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    &.active {
        color: gray;
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

const PageTitle = styled.h1`
    display: none;
`;

const Logo = styled.img`
    height: 4rem;
`;

export default function NavigationComponent() {

    return (<TopBar>
        <Navigation>
            <NavLink to="/">
                <PageTitle>Project Follow-Up</PageTitle>
                <Logo src={logo} alt="Project FollowUp Logo" />
            </NavLink>
            <MenuItems>
                <NavLinkStyled to="/">Home</NavLinkStyled>
                <NavLinkStyled to="/projects">Projects</NavLinkStyled>
                <NavLinkStyled to="/users">Users</NavLinkStyled>
                <NavLinkStyled to="/projects/create">Create project</NavLinkStyled>
            </MenuItems>
            <Notifications>
                <NavLinkStyled to="/logout" aria-label="Log out"><SquareArrowRightExit /></NavLinkStyled>
                <NavLinkStyled to="/notifications" aria-label="View notifications"><Bell /></NavLinkStyled>
            </Notifications>
        </Navigation>
    </TopBar>);
}