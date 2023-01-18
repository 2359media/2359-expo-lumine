import { ImageStyle, TextStyle, StyleSheet } from 'react-native';
declare type AllStyles = TextStyle & ImageStyle;
declare type Style = {
    [K in keyof AllStyles]: AllStyles[K] | object;
};
export declare type Styles = {
    [key: string]: Style | ((...args: any[]) => Style);
};
export declare const absoluteFillObject: StyleSheet.AbsoluteFillStyle;
export declare function createStyles<T extends Styles>(styles: T): T;
export {};
