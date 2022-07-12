import React from 'react';
import { Text as RNT } from 'react-native';
import { createThemeStyles } from '../../services/style';
export function Text(props) {
    const styles = useThemeStyles();
    return <RNT {...props} style={getStyle(styles, props)}/>;
}
function getStyle(styles, props) {
    const style = [];
    const type = ['h1', 'h2', 'h3', 'h4', 'h5', 'p2', 'p3', 'p4', 'f1'].find(t => props[t]) || 'p1';
    style.push(styles[type]);
    if (props.onPress) {
        style.push(styles.link);
    }
    if (props.style) {
        style.push(props.style);
    }
    return style;
}
const useThemeStyles = createThemeStyles(({ colors, fonts }) => ({
    h1: {
        fontFamily: fonts.primary400,
        color: colors.foreground,
        fontSize: 24,
        lineHeight: 36,
    },
    h2: {
        fontFamily: fonts.primary700,
        color: colors.foreground,
        fontSize: 20,
        lineHeight: 28,
    },
    h3: {
        fontFamily: fonts.primary600,
        color: colors.foreground,
        fontSize: 18,
        lineHeight: 28,
    },
    h4: {
        fontFamily: fonts.primary600,
        color: colors.foreground,
        fontSize: 16,
        lineHeight: 24,
    },
    h5: {
        fontFamily: fonts.primary600,
        color: colors.foreground,
        fontSize: 14,
        lineHeight: 20,
    },
    p1: {
        fontFamily: fonts.primary400,
        color: colors.foreground,
        fontSize: 16,
        lineHeight: 24,
    },
    p2: {
        fontFamily: fonts.primary400,
        color: colors.foreground,
        fontSize: 14,
        lineHeight: 20,
    },
    p3: {
        fontFamily: fonts.primary600,
        color: colors.foreground,
        fontSize: 12,
        lineHeight: 16,
    },
    p4: {
        fontFamily: fonts.primary400,
        color: colors.foreground,
        fontSize: 12,
        lineHeight: 16,
    },
    f1: {
        fontFamily: fonts.primary400,
        color: colors.foreground,
        fontSize: 10,
        lineHeight: 14,
    },
    link: {
        fontFamily: fonts.primary600,
        color: colors.primary,
    },
}));
