import {createContext} from 'react';
import {LayoutRectangle, Animated} from 'react-native';

export interface ContextValue {
  footerFrame?: LayoutRectangle;
  setFooterFrame?(frame: LayoutRectangle): void;
  offsetA?: Animated.Value;
  containerRef?: any;
}

export default createContext<ContextValue>({});
