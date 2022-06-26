import {createContext} from 'react';
import {colors} from './colors';
import {fonts} from './fonts';

export interface Theme {
  key: string;
  fonts: typeof fonts;
  colors: typeof colors;
}

export const defaultTheme = {
  key: 'default',
  fonts,
  colors,
};

export const ThemeContext = createContext<Theme>(defaultTheme);
