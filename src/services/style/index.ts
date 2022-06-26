import {useContext} from 'react';
import {ImageStyle, TextStyle, StyleSheet} from 'react-native';
import {ThemeContext, Theme} from './theme';

type AllStyles = TextStyle & ImageStyle;
type Style = {[K in keyof AllStyles]: AllStyles[K] | object};
type Styles = {[key: string]: Style | ((...args: any[]) => Style)};

export function createStyles<T extends Styles>(styles: T): T {
  return styles;
}

export function createThemeStyles<T extends Styles>(fn: (t: Theme) => T) {
  const cacheStyles: {[key: string]: T} = {};
  return function useThemeStyles() {
    const theme = useContext(ThemeContext);
    if (!cacheStyles[theme.key]) {
      cacheStyles[theme.key] = fn(theme);
    }
    return cacheStyles[theme.key];
  };
}

export const absoluteFillObject = StyleSheet.absoluteFillObject;

export * from './colors';
export * from './fonts';
export * from './shadows';
export * from './theme';
