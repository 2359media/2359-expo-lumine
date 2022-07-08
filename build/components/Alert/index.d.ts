/// <reference types="react" />
import { AlertButton } from 'react-native';
interface AlertProps {
    title?: string;
    message?: string;
    buttons?: AlertButton[];
    children?: JSX.Element | ((dismiss: () => void) => JSX.Element);
}
export declare function showAlert(title?: string, message?: string, buttons?: AlertButton[]): void;
export declare function showCustomAlert(props: AlertProps): void;
export {};
