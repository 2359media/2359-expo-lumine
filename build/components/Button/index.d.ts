/// <reference types="react" />
import { ViewProps } from 'react-native';
export interface ButtonProps extends ViewProps {
    text?: string;
    icon?: any;
    secondary?: boolean;
    success?: boolean;
    danger?: boolean;
    warning?: boolean;
    info?: boolean;
    light?: boolean;
    dark?: boolean;
    link?: boolean;
    barItem?: boolean;
    small?: boolean;
    large?: boolean;
    rounded?: boolean;
    disabled?: boolean;
    onPress?(): void;
    event?: string;
    eventBody?: object;
}
export declare function Button(props: ButtonProps): JSX.Element;
