import { createContext } from 'react';
import { colors } from './colors';
import { fonts } from './fonts';
export const defaultTheme = {
    key: 'default',
    fonts,
    colors,
};
export const ThemeContext = createContext(defaultTheme);
