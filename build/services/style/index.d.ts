import { ImageStyle, TextStyle, StyleSheet } from 'react-native';
import { Theme } from './theme';
declare type AllStyles = TextStyle & ImageStyle;
declare type Style = {
    [K in keyof AllStyles]: AllStyles[K] | object;
};
declare type Styles = {
    [key: string]: Style | ((...args: any[]) => Style);
};
export declare function createStyles<T extends Styles>(styles: T): T;
export declare function createThemeStyles<T extends Styles>(fn: (t: Theme) => T): <P>(name?: string, props?: P | undefined) => P extends object ? P & {
    styles: T;
} : T;
export declare const absoluteFillObject: StyleSheet.AbsoluteFillStyle;
export * from './colors';
export * from './fonts';
export * from './shadows';
export * from './theme';
