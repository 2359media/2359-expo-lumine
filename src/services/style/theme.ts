import {createContext} from 'react';
import {colors} from './colors';
import {fonts} from './fonts';

export interface Theme {
  key: string;
  fonts: typeof fonts;
  colors: typeof colors;
}

export const defaultTheme: Theme = {
  key: 'default',
  fonts,
  colors,
};

export const darkTheme: Theme = {
  ...defaultTheme,
  key: 'dark',
  colors: {
    ...defaultTheme.colors,
    background: colors.foreground,
    backgroundD1: colors.foregroundL1,
    backgroundD2: colors.foregroundL2,
    foreground: colors.background,
    foregroundL1: colors.backgroundD1,
    foregroundL2: colors.backgroundD2,
  },
};

export const ThemeContext = createContext<Theme>(defaultTheme);
