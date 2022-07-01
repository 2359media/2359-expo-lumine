import React, {useRef} from 'react';
import {View, Text, Pressable, ViewProps} from 'react-native';
import {TextInput as RNTI, TextInputProps as RNTIP} from 'react-native';
import Animated, {
  useSharedValue,
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useThemeStyles} from './styles';

export interface InputProps<T> {
  title?: string;
  placeholder?: string;
  icon?: any;
  error?: string;
  editable?: boolean;
  value?: T;
  onValueChange?(value: T): void;
  rounded?: boolean;
}

export interface InputContainerProps<T> extends InputProps<T>, ViewProps {
  children?(props: any): any;
  onPress?(): void;
  focus?: SharedValue<boolean>;
  inputType?: 'text' | 'textInput';
}

export function InputContainer<T>(props: InputContainerProps<T>) {
  const {
    title,
    placeholder,
    value,
    onPress,
    focus,
    children,
    rounded,
    error,
    editable = true,
    icon,
    style,
  } = props;

  const styles = useThemeStyles();
  const type = (rounded && 'Rounded') || 'Line';

  const titleStyle = useAnimatedStyle(() => {
    const onTop = focus?.value || placeholder || value;
    if (type == 'Rounded') {
      return {
        fontSize: withTiming(onTop ? 12 : 14, {duration: 200}),
        top: withTiming(onTop ? 2 : 14, {duration: 200}),
      };
    } else {
      return {
        fontSize: withTiming(onTop ? 12 : 16, {duration: 200}),
        top: withTiming(onTop ? 4 : 20, {duration: 200}),
      };
    }
  }, [!!title, !!placeholder, !!value]);

  function getStyle(name: string, ...otherStyles: any[]) {
    const anyStyles: any = styles;
    return [
      anyStyles[name],
      anyStyles[name + type],
      !editable && anyStyles[name + 'Disabled'],
      title && anyStyles[name + type + 'HasTitle'],
      !value && anyStyles[name + 'Empty'],
      ...otherStyles,
    ].filter(s => s);
  }

  return (
    <View
      style={[styles.container, style]}
      pointerEvents={editable ? 'auto' : 'none'}
    >
      <Pressable style={getStyle('border')} onPress={onPress}>
        {!!title && (
          <Animated.Text
            style={getStyle('title', titleStyle)}
            numberOfLines={1}
          >
            {title}
          </Animated.Text>
        )}
        {children ? (
          children({
            style: getStyle('value'),
            placeholderTextColor: styles.valueEmpty.color,
          })
        ) : (
          <Text style={getStyle('value')}>{value || placeholder || ' '}</Text>
        )}
        {icon}
      </Pressable>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}
