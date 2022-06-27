import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from './theme';
export function createStyles(styles) {
    return styles;
}
export function createThemeStyles(fn) {
    const cacheStyles = {};
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
//# sourceMappingURL=index.js.map