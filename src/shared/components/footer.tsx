import styled from "@emotion/styled";
import { themeTokens } from "@shared/types/themes";

const Footer = styled.footer`
  background-color: hsl(${themeTokens.backgroundColors.secondary});
`;

const FooterContent = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  line-height: 3em;
`;

export default function FooterComponent() {
    return (<Footer>
        <FooterContent>© 2026 Project FollowUp. All rights reserved.</FooterContent>
    </Footer>);
}