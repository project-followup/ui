import { Moon, Sun } from 'lucide-react';
import { availableThemes, type Theme, useTheme } from './shared/hooks/use-theme';

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
    <div className="theme-switcher">
      {theme === 'light' ? <Sun onClick={onClick} /> : null}
      {theme === 'dark' ? <Moon onClick={onClick} /> : null}
    </div>
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
