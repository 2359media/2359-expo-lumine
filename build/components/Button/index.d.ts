import { ViewProps } from 'react-native';
interface Props<T> extends ViewProps {
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
export declare function Button<T>(props: Props<T>): JSX.Element;
export {};
