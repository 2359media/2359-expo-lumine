import React from 'react';
import {Text, Image, Pressable, ViewProps, View} from 'react-native';
import {createThemeStyles, lightenDarkenColor} from '../../services/style';

const hitSlop = {bottom: 8, top: 8, right: 8, left: 8};

export interface ButtonProps extends ViewProps {
  text?: string;
  icon?: any;

  secondary?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
  info?: boolean;
  light?: boolean;
  dark?: boolean;

  link?: boolean;
  barItem?: boolean;

  small?: boolean;
  large?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  onPress?(): void;
}

export function Button(props: ButtonProps) {
  const {
    text,
    icon,

    secondary,
    success,
    danger,
    warning,
    info,
    light,
    dark,
    link,
    barItem,

    small,
    large,
    rounded,
    disabled,
    style,
    children,
    onPress,
    styles,
    ...rest
  } = useThemeStyles('Button', props);

  const type = (link && 'Link') || (barItem && 'BarItem') || 'Btn';
  const tint =
    (secondary && 'Secondary') ||
    (success && 'Success') ||
    (danger && 'Danger') ||
    (warning && 'Warning') ||
    (info && 'Info') ||
    (light && 'Light') ||
    (dark && 'Dark') ||
    'Primary';

  function getStyle(name: string, pressed: boolean, s?: any) {
    const anyStyles: any = styles;
    return [
      anyStyles[name],
      anyStyles[name + type],
      rounded && anyStyles[name + type + 'Rounded'],
      small && anyStyles[name + type + 'Small'],
      large && anyStyles[name + type + 'Large'],
      anyStyles[name + type + tint],
      pressed && anyStyles[name + type + 'Pressed'],
      pressed && anyStyles[name + type + tint + 'Pressed'],
      disabled && anyStyles[name + type + 'Disabled'],
      disabled && anyStyles[name + type + tint + 'Disabled'],
      s,
    ].filter(s => s);
  }

  return (
    <Pressable
      disabled={disabled}
      hitSlop={hitSlop}
      style={({pressed}) => getStyle('container', pressed, style)}
      onPress={() => onPress?.()}
      {...rest}
    >
      {({pressed}) => (
        <>
          {icon && <Image style={getStyle('icon', pressed)} source={icon} />}
          {icon && !!text && <View style={styles.spacer} />}
          {!!text && (
            <Text style={getStyle('text', pressed)} numberOfLines={1}>
              {text}
            </Text>
          )}
          {children}
        </>
      )}
    </Pressable>
  );
}

const useThemeStyles = createThemeStyles(({colors, fonts}) => ({
  spacer: {
    width: 12,
    height: 12,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBtn: {
    borderRadius: 8,
    paddingHorizontal: 8,
    minHeight: 48,
  },
  containerBtnDisabled: {
    backgroundColor: colors.disabled,
  },
  containerBtnRounded: {
    borderRadius: 24,
  },
  containerBtnSmall: {
    paddingHorizontal: 4,
    minHeight: 36,
  },
  containerBtnPrimary: {
    backgroundColor: colors.primary,
  },
  containerBtnPrimaryPressed: {
    backgroundColor: colors.primaryD1,
  },
  containerBtnDanger: {
    backgroundColor: colors.danger,
  },
  containerBtnDangerPressed: {
    backgroundColor: lightenDarkenColor(colors.danger, -20),
  },
  containerBtnLight: {
    backgroundColor: colors.background,
  },
  containerBtnLightPressed: {
    backgroundColor: colors.backgroundD1,
  },
  containerBtnSecondary: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  containerBtnSecondaryPressed: {
    borderColor: colors.primaryD1,
  },
  containerBtnSecondaryDisabled: {
    backgroundColor: undefined,
    borderColor: colors.disabled,
  },
  containerBarItem: {
    minHeight: 40,
    minWidth: 40,
  },
  iconBtn: {
    tintColor: colors.white,
  },
  iconBtnDisabled: {
    tintColor: colors.disabledD1,
  },
  iconBtnSecondary: {
    tintColor: colors.primary,
  },
  iconBtnSecondaryPressed: {
    tintColor: colors.primaryD1,
  },
  iconBtnSecondaryDisabled: {
    tintColor: colors.disabledD1,
  },
  iconBarItem: {
    tintColor: colors.primary,
  },
  iconBarItemPressed: {
    tintColor: colors.primaryD1,
  },
  iconBarItemDisabled: {
    tintColor: colors.disabledD1,
  },
  text: {
    fontFamily: fonts.primary600,
    fontSize: 16,
  },
  textBtn: {
    color: colors.background,
  },
  textBtnSmall: {
    fontSize: 14,
  },
  textBtnDisabled: {
    color: colors.disabledD1,
  },
  textBtnSecondary: {
    color: colors.primary,
  },
  textBtnSecondaryPressed: {
    color: colors.primaryD1,
  },
  textBtnSecondaryDisabled: {
    color: colors.disabledD1,
  },
  textBtnLight: {
    color: colors.foreground,
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
    fontSize: 14,
  },
  textLinkLarge: {
    fontFamily: fonts.primary700,
    fontSize: 20,
  },
}));
