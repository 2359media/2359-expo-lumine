/// <reference types="react" />
import { LayoutRectangle, Animated } from 'react-native';
export interface ContextValue {
    footerFrame?: LayoutRectangle;
    setFooterFrame?(frame: LayoutRectangle): void;
    offsetA?: Animated.Value;
    containerRef?: any;
}
declare const _default: import("react").Context<ContextValue>;
export default _default;
