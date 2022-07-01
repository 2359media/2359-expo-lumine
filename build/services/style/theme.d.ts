/// <reference types="react" />
import { colors } from './colors';
import { fonts } from './fonts';
export interface Theme {
    key: string;
    fonts: typeof fonts;
    colors: typeof colors;
}
export declare const defaultTheme: {
    key: string;
    fonts: {
        primary400: string;
        primary600: string;
        primary700: string;
    };
    colors: {
        transparent: string;
        background: string;
        foreground: string;
        primary: string;
        primaryD1: string;
        secondary: string;
        danger: string;
        warning: string;
        info: string;
        disabled: string;
        disabledD1: string;
        black: string;
        white: string;
        greyL3: string;
        greyL2: string;
        greyL1: string;
        grey: string;
        greyD1: string;
    };
};
export declare const ThemeContext: import("react").Context<Theme>;
