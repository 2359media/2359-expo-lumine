import { ViewProps } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
export interface InputProps<T> {
    title?: string;
    placeholder?: string;
    icon?: any;
    error?: string;
    editable?: boolean;
    value?: T;
    onValueChange?(value?: T): void;
    rounded?: boolean;
}
export interface InputContainerProps<T> extends InputProps<T>, ViewProps {
    children?(props: any): any;
    onPress?(): void;
    focus?: SharedValue<boolean>;
}
export declare function InputContainer<T>(props: InputContainerProps<T>): JSX.Element;
