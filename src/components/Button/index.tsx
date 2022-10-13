import React from 'react';
import {Text, Image, Pressable, ViewStyle, PressableProps} from 'react-native';
import m from '../../../modules';
import {ButtonSX, ButtonType, useStyles} from './styles';

export interface ButtonProps extends PressableProps {
  text?: string;
  icon?: any;
  type?: ButtonType;
  style?: ViewStyle;
  event?: string;
  eventBody?: object;
  sx?: ButtonSX;
  onPress?(): void;
}

export function Button(props: ButtonProps) {
  const {
    text,
    icon,
    type,
    disabled,
    style,
    children,
    onPress,
    event,
    eventBody,
    sx,
    ...rest
  } = props;

  const styles = useStyles('Button');
  const {track} = m.Analytics.useAnalytics();

  return (
    <Pressable
      disabled={disabled}
      hitSlop={8}
      style={({pressed}) => [
        styles[`${type}Container`],
        sx?.container,
        pressed && styles[`${type}ContainerPressed`],
        pressed && sx?.containerPressed,
        disabled && styles[`${type}ContainerDisabled`],
        disabled && sx?.containerDisabled,
        style,
      ]}
      onPress={() => {
        const eventName = event || text;
        eventName && track(eventName, eventBody);
        onPress?.();
      }}
      {...rest}
    >
      {({pressed}) => (
        <>
          {icon && (
            <Image
              style={[
                styles[`${type}Icon`],
                sx?.icon,
                pressed && styles[`${type}IconPressed`],
                pressed && sx?.iconPressed,
                disabled && styles[`${type}IconDisabled`],
                disabled && sx?.iconDisabled,
              ]}
              source={icon}
            />
          )}
          {!!text && (
            <Text
              style={[
                styles[`${type}Text`],
                sx?.text,
                pressed && styles[`${type}TextPressed`],
                pressed && sx?.textPressed,
                disabled && styles[`${type}TextDisabled`],
                disabled && sx?.textDisabled,
              ]}
              numberOfLines={1}
            >
              {text}
            </Text>
          )}
          {children}
        </>
      )}
    </Pressable>
  );
}
