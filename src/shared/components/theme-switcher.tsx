import { Moon, Sun } from 'lucide-react';
import styled from '@emotion/styled';
import { availableThemes, type Theme, themeTokens, useTheme } from '@shared/hooks/use-theme';

const LinkStyled = styled.a`
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

interface ThemeRepresentationProps {
  currentTheme: Theme;
  onClick: () => void;
}

function ThemeRepresentation(props: ThemeRepresentationProps) {
  const { currentTheme: theme, onClick } = props;

  if (availableThemes.length === 1) {
    return null;
  }

  return (
    <LinkStyled href="#" onClick={onClick}>
      {theme === 'light' ? <Moon /> : null}
      {theme === 'dark' ? <Sun /> : null}
    </LinkStyled>
  );
}

export default function ThemeSwitcher() {
  const themeOperator = useTheme();
  const onClick = () => {
    themeOperator.nextTheme();
  };

  return (
    <ThemeRepresentation currentTheme={themeOperator.theme} onClick={onClick} />
  );
}
