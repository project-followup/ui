import styled from "@emotion/styled";
import { themeTokens } from "@shared/types/themes";
import { NavLink } from "react-router-dom";

interface NavigationButtonProps {
    to: string;
    title?: string;
    icon?: React.ReactNode;
}

const NavLinkStyled = styled(NavLink)`
    padding: 0.5em 0.75em;
    display: flex;
    gap: 0;
    align-items: center;
    text-align: center;
    
    &:hover {
        background-color: hsl(${themeTokens.backgroundColors.primary});
    }
`;

export default function NavigationButton({ to, title, icon }: NavigationButtonProps) {
    return (<NavLinkStyled to={to} aria-label={title} title={title}>
        {icon}
        <span>{title}</span>
    </NavLinkStyled>);
}