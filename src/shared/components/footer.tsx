import styled from "@emotion/styled";
import { themeTokens } from "@shared/hooks/use-theme";

const Footer = styled.footer`
    background-color: hsl(${themeTokens.backgroundColors.panel});
    color: hsl(${themeTokens.textColors.primary});
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

export default function FooterComponent() {
    return (<Footer>
        <p>© 2024 Project FollowUp. All rights reserved.</p>
    </Footer>);
}