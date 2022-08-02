import { createContext } from 'react';
import { colors } from './colors';
import { fonts } from './fonts';
export const defaultTheme = {
    dark: false,
    key: 'default',
    fonts,
    colors,
};
export const darkTheme = {
    ...defaultTheme,
    dark: true,
    key: 'dark',
    colors: {
        ...defaultTheme.colors,
        background: colors.foreground,
        backgroundD1: colors.foregroundL1,
        backgroundD2: colors.foregroundL2,
        backgroundD3: colors.foregroundL3,
        foreground: colors.background,
        foregroundL1: colors.backgroundD1,
        foregroundL2: colors.backgroundD2,
        foregroundL3: colors.backgroundD3,
        text: colors.background,
        border: colors.foregroundL1,
        card: colors.foreground,
    },
};
export const ThemeContext = createContext(defaultTheme);
