import React from 'react';
import {Text, TextProps} from 'react-native';
import {colors, createStyles, fonts} from '../../services/style';

function createTypography(name: string) {
  const style = (textStyles as any)[name.toLowerCase()];
  return function Typography(props: TextProps) {
    return <Text {...props} style={[style, props.style]} />;
  };
}

export const textStyles = createStyles(() => ({
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
  body1: {
    fontFamily: fonts.primary400,
    color: colors.foreground,
    fontSize: 16,
    lineHeight: 24,
  },
  body2: {
    fontFamily: fonts.primary400,
    color: colors.foreground,
    fontSize: 14,
    lineHeight: 20,
  },
  body3: {
    fontFamily: fonts.primary600,
    color: colors.foreground,
    fontSize: 12,
    lineHeight: 16,
  },
  body4: {
    fontFamily: fonts.primary400,
    color: colors.foreground,
    fontSize: 12,
    lineHeight: 16,
  },
  footnote: {
    fontFamily: fonts.primary400,
    color: colors.foreground,
    fontSize: 10,
    lineHeight: 14,
  },
}));

export const H1 = createTypography('H1');
export const H2 = createTypography('H2');
export const H3 = createTypography('H3');
export const H4 = createTypography('H4');
export const H5 = createTypography('H5');
export const Body1 = createTypography('Body1');
export const Body2 = createTypography('Body2');
export const Body3 = createTypography('Body3');
export const Body4 = createTypography('Body4');
export const FootNote = createTypography('FootNote');
