import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { AnimatedTitle } from './AnimatedTitle';
import { useThemeStyles } from './styles';
export function InputContainer(props) {
    const { title, placeholder, value, onPress, focus, children, rounded, error, editable = true, icon, iconOnPress, style, styles, } = useThemeStyles('Input', props);
    const type = (rounded && 'Rounded') || 'Line';
    const forceOnTop = !!value || !!placeholder;
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
    return (<View style={[styles.container, style]} pointerEvents={editable ? 'auto' : 'none'}>
      <Pressable style={getStyle('border')} onPress={onPress}>
        {!!title && (<AnimatedTitle style={getStyle('title')} forceOnTop={forceOnTop} focus={focus} type={type}>
            {title}
          </AnimatedTitle>)}
        {children ? (children({
            style: getStyle('value'),
            placeholderTextColor: styles.valueEmpty.color,
        })) : (<Text style={getStyle('value')}>{value || placeholder || ' '}</Text>)}
        {icon ? (iconOnPress ? (<Pressable hitSlop={8} onPress={() => iconOnPress()}>
              <Image style={styles.icon} source={icon}/>
            </Pressable>) : (<Image style={styles.icon} source={icon}/>)) : undefined}
      </Pressable>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>);
}
