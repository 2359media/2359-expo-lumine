import React from 'react';
import { Text, Image, Pressable } from 'react-native';
import { createThemeStyles } from '../../services/style';
const hitSlop = { bottom: 8, top: 8, right: 8, left: 8 };
export function Button(props) {
    const { text, icon, sx, secondary, link, small, large, rounded, disabled, style, children, value, onPress, ...rest } = props;
    const styles = useThemeStyles();
    const type = (secondary && 'Secondary') || (link && 'Link') || 'Primary';
    function getStyle(name, pressed, s, ps) {
        const anyStyles = styles;
        return [
            anyStyles[name],
            anyStyles[name + type],
            rounded && anyStyles[name + type + 'Rounded'],
            disabled && anyStyles[name + type + 'Disabled'],
            small && anyStyles[name + type + 'Small'],
            large && anyStyles[name + type + 'Large'],
            pressed && anyStyles[name + type + 'Pressed'],
            s,
            pressed && ps,
        ].filter(s => s);
    }
    return (React.createElement(Pressable, { disabled: disabled, hitSlop: hitSlop, style: ({ pressed }) => getStyle('container', pressed, style, sx?.pressed), onPress: () => onPress?.(value), ...rest }, ({ pressed }) => (React.createElement(React.Fragment, null,
        icon && (React.createElement(Image, { style: getStyle('icon', pressed, sx?.icon, sx?.iconPressed), source: icon })),
        !!text && (React.createElement(Text, { style: getStyle('text', pressed, sx?.text, sx?.textPressed) }, text)),
        children))));
}
const useThemeStyles = createThemeStyles(({ colors, fonts }) => ({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 48,
    },
    containerPrimary: {
        borderRadius: 8,
        paddingHorizontal: 18,
        backgroundColor: colors.primary,
    },
    containerPrimaryPressed: {
        backgroundColor: colors.primaryD1,
    },
    containerPrimaryDisabled: {
        backgroundColor: colors.disabled,
    },
    containerPrimaryRounded: {
        borderRadius: 24,
    },
    containerSecondary: {
        borderRadius: 8,
        paddingHorizontal: 18,
        borderWidth: 1,
        borderColor: colors.primary,
    },
    containerSecondaryPressed: {
        borderColor: colors.primaryD1,
    },
    containerSecondaryDisabled: {
        borderColor: colors.disabled,
    },
    containerSecondaryRounded: {
        borderRadius: 24,
    },
    icon: {
        margin: 6,
    },
    iconPrimary: {
        tintColor: colors.white,
    },
    iconPrimaryDisabled: {
        tintColor: colors.disabledD1,
    },
    iconSecondary: {
        tintColor: colors.primary,
    },
    iconSecondaryPressed: {
        tintColor: colors.primaryD1,
    },
    iconSecondaryDisabled: {
        tintColor: colors.disabledD1,
    },
    text: {
        margin: 6,
        fontFamily: fonts.primary600,
        fontSize: 16,
    },
    textPrimary: {
        color: colors.white,
    },
    textPrimaryDisabled: {
        color: colors.disabledD1,
    },
    textSecondary: {
        color: colors.primary,
    },
    textSecondaryPressed: {
        color: colors.primaryD1,
    },
    textSecondaryDisabled: {
        color: colors.disabledD1,
    },
    textLink: {
        color: colors.primary,
    },
    textLinkPressed: {
        color: colors.primaryD1,
    },
    textLinkDisabled: {
        color: colors.disabledD1,
    },
    textLinkSmall: {
        color: colors.primary,
        fontSize: 14,
    },
    textLinkLarge: {
        fontFamily: fonts.primary700,
        color: colors.primary,
        fontSize: 20,
    },
}));
//# sourceMappingURL=index.js.map