import React from 'react';
import {Text, Image, Pressable, ViewProps} from 'react-native';
import {colors, createStyles, fonts} from '../../services/style';

const hitSlop = {bottom: 8, top: 8, right: 8, left: 8};

interface Props<T> extends ViewProps {
  text?: string;
  icon?: any;
  value?: T;
  sx?: {
    text?: any;
    icon?: any;
    pressed?: any;
    textPressed?: any;
    iconPressed?: any;
  };
  secondary?: boolean;
  link?: boolean;
  small?: boolean;
  large?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  onPress?(value?: T): void;
}

export function Button<T>(props: Props<T>) {
  const {
    text,
    icon,
    sx,
    secondary,
    link,
    small,
    large,
    rounded,
    disabled,
    style,
    children,
    value,
    onPress,
    ...rest
  } = props;

  const type = (secondary && 'Secondary') || (link && 'Link') || 'Primary';

  function getStyle(name: string, pressed: boolean, s: any, ps: any) {
    const anyStyles: any = styles;
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

  return (
    <Pressable
      disabled={disabled}
      hitSlop={hitSlop}
      style={({pressed}) => getStyle('container', pressed, style, sx?.pressed)}
      onPress={() => onPress?.(value)}
      {...rest}
    >
      {({pressed}) => (
        <>
          {icon && (
            <Image
              style={getStyle('icon', pressed, sx?.icon, sx?.iconPressed)}
              source={icon}
            />
          )}
          {!!text && (
            <Text style={getStyle('text', pressed, sx?.text, sx?.textPressed)}>
              {text}
            </Text>
          )}
          {children}
        </>
      )}
    </Pressable>
  );
}

export const styles = createStyles(() => ({
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
    backgroundColor: colors.primaryDarker,
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
    borderColor: colors.primaryDarker,
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
    tintColor: colors.disabledDarker,
  },
  iconSecondary: {
    tintColor: colors.primary,
  },
  iconSecondaryPressed: {
    tintColor: colors.primaryDarker,
  },
  iconSecondaryDisabled: {
    tintColor: colors.disabledDarker,
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
    color: colors.disabledDarker,
  },
  textSecondary: {
    color: colors.primary,
  },
  textSecondaryPressed: {
    color: colors.primaryDarker,
  },
  textSecondaryDisabled: {
    color: colors.disabledDarker,
  },
  textLink: {
    color: colors.primary,
  },
  textLinkPressed: {
    color: colors.primaryDarker,
  },
  textLinkDisabled: {
    color: colors.disabledDarker,
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
