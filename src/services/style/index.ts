import {useContext, useMemo} from 'react';
import {ImageStyle, TextStyle, StyleSheet} from 'react-native';
import {ThemeContext, Theme} from './theme';

type AllStyles = TextStyle & ImageStyle;
type Style = {[K in keyof AllStyles]: AllStyles[K] | object};
type Styles = {[key: string]: Style | ((...args: any[]) => Style)};

export function createStyles<T extends Styles>(styles: T): T {
  return styles;
}

export function createThemeStyles<T extends Styles>(fn: (t: Theme) => T) {
  const cacheStyles: {[key: string]: any} = {};
  return function useThemeStyles<P>(
    name?: string,
    props?: P
  ): P extends object ? P & {styles: T} : T {
    const theme = useContext(ThemeContext);
    const key = theme.key;
    const defProps = name && theme.defaultProps?.[name];
    let styles = useMemo(() => {
      if (!cacheStyles[key]) {
        const defSx = defProps?.sx ?? {};
        cacheStyles[key] = {...fn(theme), ...defSx};
      }
      return cacheStyles[key];
    }, [key]);

    if ((props as any)?.sx) {
      styles = {...styles, ...(props as any).sx};
    }

    if (props) {
      return {...defProps, ...props, styles};
    }
    return styles;
  };
}

export const absoluteFillObject = StyleSheet.absoluteFillObject;

export * from './colors';
export * from './fonts';
export * from './shadows';
export * from './theme';
