import React from 'react';
import {View, Text, Pressable, ViewProps, Image} from 'react-native';
import {SharedValue} from '../../../modules/reanimated';
import {AnimatedTitle} from './AnimatedTitle';
import {useThemeStyles} from './styles';

export interface InputProps<T> {
  title?: string;
  placeholder?: string;
  icon?: any;
  iconOnPress?(): void;
  error?: string;
  editable?: boolean;
  value?: T;
  onValueChange?(value?: T): void;
  rounded?: boolean;
}

export interface InputContainerProps<T> extends InputProps<T>, ViewProps {
  children?(props: any): any;
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
    editable = true,
    icon,
    iconOnPress,
    style,
  } = props;
  const styles = useThemeStyles('Input');

  const type = (rounded && 'Rounded') || 'Line';
  const forceOnTop = !!value || !!placeholder;

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
          <AnimatedTitle
            style={getStyle('title')}
            forceOnTop={forceOnTop}
            focus={focus}
            type={type}
          >
            {title}
          </AnimatedTitle>
        )}
        {children ? (
          children({
            style: getStyle('value'),
            placeholderTextColor: styles.valueEmpty.color,
          })
        ) : (
          <Text style={getStyle('value')}>{value || placeholder || ' '}</Text>
        )}
        {icon ? (
          iconOnPress ? (
            <Pressable hitSlop={8} onPress={() => iconOnPress()}>
              <Image style={styles.icon} source={icon} />
            </Pressable>
          ) : (
            <Image style={styles.icon} source={icon} />
          )
        ) : undefined}
      </Pressable>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}
