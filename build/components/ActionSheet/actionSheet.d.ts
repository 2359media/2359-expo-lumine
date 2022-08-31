import { AlertButton } from 'react-native';
interface ActionSheetProps {
    title?: string;
    subtitle?: string;
    buttons: AlertButton[];
}
export declare function showActionSheet(props: ActionSheetProps): void;
export {};
