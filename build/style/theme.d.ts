/// <reference types="react" />
import { DeepPartial } from '../utils';
import { colors as defaultColors } from './colors';
import { fonts as defaultFonts } from './fonts';
import { Styles } from './base';
export interface Theme {
    dark: boolean;
    key: string;
    fonts: typeof defaultFonts;
    colors: typeof defaultColors;
    components?: {
        [key: string]: Styles;
    };
}
export declare function createTheme(t: DeepPartial<Theme>): Theme;
export declare function createThemeStyles<T extends Styles>(fn: (t: Theme) => T): (name?: string) => T;
export declare const defaultTheme: Theme;
export declare const darkTheme: Theme;
export declare const ThemeContext: import("react").Context<Theme>;
