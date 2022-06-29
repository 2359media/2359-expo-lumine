import { ViewProps } from 'react-native';
export interface ButtonProps<T> extends ViewProps {
    text?: string;
    icon?: any;
    value?: T;
    sx?: {
        text?: any;
        icon?: any;
        pressed?: any;
        textPressed?: any;
        iconPressed?: any;
    };
    secondary?: boolean;
    link?: boolean;
    small?: boolean;
    large?: boolean;
    rounded?: boolean;
    disabled?: boolean;
    onPress?(value?: T): void;
}
export declare function Button<T>(props: ButtonProps<T>): JSX.Element;
