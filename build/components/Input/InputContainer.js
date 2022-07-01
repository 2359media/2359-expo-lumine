import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Animated, { useAnimatedStyle, withTiming, } from 'react-native-reanimated';
import { useThemeStyles } from './styles';
export function InputContainer(props) {
    const { title, placeholder, value, onPress, focus, children, rounded, error, editable = true, icon, style, } = props;
    const styles = useThemeStyles();
    const type = (rounded && 'Rounded') || 'Line';
    const titleStyle = useAnimatedStyle(() => {
        const onTop = focus?.value || placeholder || value;
        if (type == 'Rounded') {
            return {
                fontSize: withTiming(onTop ? 12 : 14, { duration: 200 }),
                top: withTiming(onTop ? 2 : 14, { duration: 200 }),
            };
        }
        else {
            return {
                fontSize: withTiming(onTop ? 12 : 16, { duration: 200 }),
                top: withTiming(onTop ? 4 : 20, { duration: 200 }),
            };
        }
    }, [!!title, !!placeholder, !!value]);
    function getStyle(name, ...otherStyles) {
        const anyStyles = styles;
        return [
            anyStyles[name],
            anyStyles[name + type],
            !editable && anyStyles[name + 'Disabled'],
            title && anyStyles[name + type + 'HasTitle'],
            !value && anyStyles[name + 'Empty'],
            ...otherStyles,
        ].filter(s => s);
    }
    return (React.createElement(View, { style: [styles.container, style], pointerEvents: editable ? 'auto' : 'none' },
        React.createElement(Pressable, { style: getStyle('border'), onPress: onPress },
            !!title && (React.createElement(Animated.Text, { style: getStyle('title', titleStyle), numberOfLines: 1 }, title)),
            children ? (children({
                style: getStyle('value'),
                placeholderTextColor: styles.valueEmpty.color,
            })) : (React.createElement(Text, { style: getStyle('value') }, value || placeholder || ' ')),
            icon),
        !!error && React.createElement(Text, { style: styles.error }, error)));
}
