import React from 'react';
import {View, Text, Pressable, ViewProps} from 'react-native';
import Animated, {
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
  children?: any;
  onPress?(): void;
  focus?: SharedValue<boolean>;
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
    style,
  } = props;

  const styles = useThemeStyles();

  const titleStyle = useAnimatedStyle(() => {
    const shouldMove = focus?.value || placeholder || value;
    return {
      fontSize: withTiming(shouldMove ? 12 : 16, {duration: 200}),
      top: withTiming(shouldMove ? 0 : 12, {duration: 200}),
    };
  });

  const phStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(focus?.value ? 0 : 1, {duration: 100}),
    };
  });

  return (
    <View style={[styles.container, style]}>
      <Pressable onPress={onPress}>
        <View style={rounded ? styles.borderRounded : styles.border} />
        {!!title && !rounded && (
          <Animated.Text style={[styles.title, titleStyle]} numberOfLines={1}>
            {title}
          </Animated.Text>
        )}
        {!value && !!placeholder && (
          <Animated.Text style={[styles.placeholder, phStyle]}>
            {placeholder}
          </Animated.Text>
        )}
        {children}
      </Pressable>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}
