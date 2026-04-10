import { useEffect, useState } from "react";
import { localStorageService, type LocalStorageService } from "../infrastructure/localStorageService";

export type Theme = 'light' | 'dark';

export const themeTokens = {
    backgroundColors: {
        primary: 'var(--color-bg-primary)',
    }
}

export const availableThemes: Theme[] = ['light', 'dark'];

const isTheme = (value: string): value is Theme => {
    return availableThemes.includes(value as Theme);
};

export const useTheme = () => {
    const storage: LocalStorageService = localStorageService;
    const ThemeStorageKey = 'APP:SETTINGS:THEME';
    const [theme, setThemeState] = useState<Theme>(() => {
        const datasetTheme = document.body.dataset.theme;
        if (datasetTheme && isTheme(datasetTheme)) {
            return datasetTheme;
        }

        const storedTheme = storage.getItem<Theme>(ThemeStorageKey);
        if (storedTheme && isTheme(storedTheme)) {
            return storedTheme;
        }

        return 'light';
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