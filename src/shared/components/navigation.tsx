import { NavLink } from "react-router-dom";
import { Bell, SquareArrowRightExit } from 'lucide-react';
import logo from "@assets/logo.svg";
import styled from '@emotion/styled';

const TopBar = styled.div`
`;

const Navigation = styled.nav`
`;

const MenuItems = styled.div`
`;

const NavLinkStyled = styled(NavLink)`
`;

const Notifications = styled.ul`
`;

const PageTitle = styled.h1`
`;

const Logo = styled.img`
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