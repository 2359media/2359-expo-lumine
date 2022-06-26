import {ImageStyle, TextStyle, StyleSheet} from 'react-native';

type AllStyles = TextStyle & ImageStyle;
type Style = {[K in keyof AllStyles]: AllStyles[K] | object};
type Styles = {[key: string]: Style | ((...args: any[]) => Style)};

export function createStyles<T extends Styles>(styles: T | (() => T)): T {
  return typeof styles == 'function' ? styles() : styles;
}

export const absoluteFillObject = StyleSheet.absoluteFillObject;

export * from './colors';
export * from './fonts';
export * from './shadows';
