/// <reference types="react" />
import { ViewProps } from 'react-native';
interface TabsProps extends ViewProps {
    selectedIndex?: number;
    data?: string[];
    onValueChange?(index: number): void;
}
export declare function Tabs(props: TabsProps): JSX.Element;
export {};
