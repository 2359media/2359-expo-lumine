/// <reference types="react" />
import { ViewProps } from 'react-native';
interface ListItemProps extends ViewProps {
    title?: string;
    onPress?(): void;
    rounded?: boolean;
    isFirst?: boolean;
    isLast?: boolean;
    type?: 'cancel' | 'destructive' | 'action' | 'default';
}
export declare function ListItem(props: ListItemProps): JSX.Element;
export {};
