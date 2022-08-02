import { useContext, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from './theme';
export function createStyles(styles) {
    return styles;
}
export function createThemeStyles(fn) {
    const cacheStyles = {};
    return function useThemeStyles(name, props) {
        const theme = useContext(ThemeContext);
        const key = theme.key;
        const defProps = name && theme.defaultProps?.[name];
        let styles = useMemo(() => {
            if (!cacheStyles[key]) {
                const defSx = defProps?.sx ?? {};
                cacheStyles[key] = { ...fn(theme), ...defSx };
            }
            return cacheStyles[key];
        }, [key]);
        if (props?.sx) {
            styles = { ...styles, ...props.sx };
        }
        if (props) {
            return { ...defProps, ...props, styles };
        }
        return styles;
    };
}
export const absoluteFillObject = StyleSheet.absoluteFillObject;
export * from './colors';
export * from './fonts';
export * from './shadows';
export * from './theme';
