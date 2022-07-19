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
    foreground: colors.background,
  },
};

export const ThemeContext = createContext<Theme>(defaultTheme);
