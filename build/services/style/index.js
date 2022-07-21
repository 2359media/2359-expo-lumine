import { useContext, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from './theme';
export function createStyles(styles) {
    return styles;
}
export function createThemeStyles(fn) {
    const cacheStyles = {};
    return function useThemeStyles() {
        const theme = useContext(ThemeContext);
        const key = theme.key;
        return useMemo(() => {
            if (!cacheStyles[key]) {
                cacheStyles[key] = fn(theme);
            }
            return cacheStyles[key];
        }, [key]);
    };
}
export const absoluteFillObject = StyleSheet.absoluteFillObject;
export * from './colors';
export * from './fonts';
export * from './shadows';
export * from './theme';
