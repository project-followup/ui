import { useEffect, useState } from "react";
import { localStorageService, type LocalStorageService } from "../infrastructure/localStorageService";

export type Theme = 'light' | 'dark';

export const theme = {
    backgroundColors: {
        primary: 'var(--color-bg-primary)',
    }
}

export const availableThemes: Theme[] = ['light', 'dark'];

export const useTheme = () => {
    const storage: LocalStorageService = localStorageService;
    const ThemeStorageKey = 'APP:SETTINGS:THEME';
    const [theme, setThemeState] = useState<Theme>(() => {
        if (document.body.dataset.theme) {
            return document.body.dataset.theme as Theme;
        }

        const storedTheme = storage.getItem<Theme>(ThemeStorageKey);
        return storedTheme || 'light';
    });

    useEffect(() => {
        document.body.dataset.theme = theme;
        storage.setItem<Theme>(ThemeStorageKey, theme);
    }, [theme, storage]);

    const setTheme = (name: Theme) => {
        if (availableThemes.includes(name)) {
            setThemeState(name);
        }
    };

    const nextTheme = () => {
        const index =
            (availableThemes.indexOf(theme) + 1) % availableThemes.length;
        setThemeState(availableThemes[index] as Theme);
    };

    return { theme, setTheme, nextTheme };
};