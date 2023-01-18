import {createContext, useContext, useMemo} from 'react';
import {deepMerge, DeepPartial} from '../utils';
import {colors as defaultColors} from './colors';
import {fonts as defaultFonts} from './fonts';
import {Styles} from './base';

export interface Theme {
  dark: boolean;
  key: string;
  fonts: typeof defaultFonts;
  colors: typeof defaultColors;
  components?: {[key: string]: Styles};
}

export function createTheme(t: DeepPartial<Theme>): Theme {
  const theme: Theme = {
    dark: t.dark ?? false,
    key: t.key ?? 'default',
    fonts: deepMerge(defaultFonts, t.fonts ?? {}),
    colors: deepMerge(defaultColors, t.colors ?? {}),
    components: t?.components,
  };
  return theme;
}

export function createThemeStyles<T extends Styles>(fn: (t: Theme) => T) {
  const cacheStyles: {[key: string]: any} = {};
  return function useThemeStyles(name?: string): T {
    const theme = useContext(ThemeContext);
    const key = theme.key;
    return useMemo(() => {
      if (!cacheStyles[key]) {
        let s = fn(theme);
        const themeSX = name && theme.components?.[name];
        themeSX && (s = deepMerge(s, themeSX as DeepPartial<T>));
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

export const ThemeContext = createContext<Theme>(defaultTheme);
