/// <reference types="react" />
import { colors } from './colors';
import { fonts } from './fonts';
export interface Theme {
    dark: boolean;
    key: string;
    fonts: typeof fonts;
    colors: typeof colors;
    defaultProps?: {
        [key: string]: any;
    };
}
export declare const defaultTheme: Theme;
export declare const darkTheme: Theme;
export declare const ThemeContext: import("react").Context<Theme>;
