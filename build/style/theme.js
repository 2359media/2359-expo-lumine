import { createContext, useContext, useMemo } from 'react';
import { deepMerge } from '../utils';
import { colors as defaultColors } from './colors';
import { fonts as defaultFonts } from './fonts';
export function createTheme(t) {
    const theme = {
        dark: t.dark ?? false,
        key: t.key ?? 'default',
        fonts: deepMerge(defaultFonts, t.fonts ?? {}),
        colors: deepMerge(defaultColors, t.colors ?? {}),
        components: t?.components,
    };
    return theme;
}
export function createThemeStyles(fn) {
    const cacheStyles = {};
    return function useThemeStyles(name) {
        const theme = useContext(ThemeContext);
        const key = theme.key;
        return useMemo(() => {
            if (!cacheStyles[key]) {
                let s = fn(theme);
                const themeSX = name && theme.components?.[name];
                themeSX && (s = deepMerge(s, themeSX));
                cacheStyles[key] = s;
            }
            return cacheStyles[key];
        }, [key]);
    };
}
export const defaultTheme = createTheme({});
export const darkTheme = createTheme({
    dark: true,
    key: 'dark',
    colors: {
        background: defaultColors.foreground,
        backgroundD1: defaultColors.foregroundL1,
        backgroundD2: defaultColors.foregroundL2,
        backgroundD3: defaultColors.foregroundL3,
        foreground: defaultColors.background,
        foregroundL1: defaultColors.backgroundD1,
        foregroundL2: defaultColors.backgroundD2,
        foregroundL3: defaultColors.backgroundD3,
        text: defaultColors.background,
        border: defaultColors.foregroundL1,
        card: defaultColors.foreground,
    },
});
export const ThemeContext = createContext(defaultTheme);
