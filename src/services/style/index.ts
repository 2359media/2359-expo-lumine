import {useContext, useMemo} from 'react';
import {ImageStyle, TextStyle, StyleSheet} from 'react-native';
import {deepMerge} from '../store/utils';
import {ThemeContext, Theme, defaultTheme} from './theme';

type AllStyles = TextStyle & ImageStyle;
type Style = {[K in keyof AllStyles]: AllStyles[K] | object};
type Styles = {[key: string]: Style | ((...args: any[]) => Style)};

export function createStyles<T extends Styles>(styles: T): T {
  return styles;
}

export function createThemeStyles<T extends Styles>(fn: (t: Theme) => T) {
  return function useThemeStyles() {
    const theme = useContext(ThemeContext);
    return useMemo(() => fn(theme), [theme]);
  };
}

export const absoluteFillObject = StyleSheet.absoluteFillObject;

export * from './colors';
export * from './fonts';
export * from './shadows';
export * from './theme';
