/// <reference types="react" />
import { Animated, ViewProps } from 'react-native';
interface PageViewProps extends ViewProps {
    indicator?: (index: number, indexA: Animated.AnimatedInterpolation) => any;
}
export declare function PageView(props: PageViewProps): JSX.Element;
export declare namespace PageView {
    var IndicatorFrame: any;
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
