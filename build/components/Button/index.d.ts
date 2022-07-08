/// <reference types="react" />
import { ViewProps } from 'react-native';
export interface ButtonProps extends ViewProps {
    text?: string;
    icon?: any;
    sx?: {
        text?: any;
        icon?: any;
        pressed?: any;
        textPressed?: any;
        iconPressed?: any;
    };
    secondary?: boolean;
    danger?: boolean;
    link?: boolean;
    small?: boolean;
    large?: boolean;
    rounded?: boolean;
    disabled?: boolean;
    onPress?(): void;
}
export declare function Button(props: ButtonProps): JSX.Element;
