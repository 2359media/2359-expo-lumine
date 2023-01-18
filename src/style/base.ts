import {ImageStyle, TextStyle, StyleSheet} from 'react-native';

type AllStyles = TextStyle & ImageStyle;
type Style = {[K in keyof AllStyles]: AllStyles[K] | object};
export type Styles = {[key: string]: Style | ((...args: any[]) => Style)};

export const absoluteFillObject = StyleSheet.absoluteFillObject;

export function createStyles<T extends Styles>(styles: T): T {
  return styles;
}
