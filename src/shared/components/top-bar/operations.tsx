import { NavLink } from "react-router-dom";
import { Bell, SquareArrowRightExit, UserCog } from 'lucide-react';
import styled from '@emotion/styled';
import { themeTokens } from "@shared/types/themes";

const NavLinkStyled = styled(NavLink)`
    padding: 0.5em 0.25em;
    display: flex;
    gap: 0;
    align-items: center;
    text-align: center;
    
    &:hover {
        background-color: hsl(${themeTokens.backgroundColors.primary});
    }
`;

const Operations = styled.ul`
    display: flex;
`;

export default function OperationsComponent() {

    return (<Operations>
        <NavLinkStyled to="/notifications" aria-label="View notifications"><Bell /></NavLinkStyled>
        <NavLinkStyled to="/user/profile" aria-label="Profile"><UserCog /></NavLinkStyled>
        <NavLinkStyled to="/logout" aria-label="Log out"><SquareArrowRightExit /></NavLinkStyled>
    </Operations>);
}