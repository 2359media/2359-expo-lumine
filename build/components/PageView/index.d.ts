/// <reference types="react" />
import { ViewProps } from 'react-native';
interface PageViewProps<T> extends ViewProps {
    data?: T[];
    renderItem?(item: T, index: number): any;
}
export declare function PageView<T>(props: PageViewProps<T>): JSX.Element;
export declare namespace PageView {
    var Footer: any;
}
export declare const styles: {
    container: {
        flex: number;
    };
    page: (w: number) => {
        width: number;
    };
};
export {};
