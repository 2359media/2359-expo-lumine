/// <reference types="react" />
import { Animated, ViewProps } from 'react-native';
interface IndicatorProps extends ViewProps {
    indexA: Animated.AnimatedInterpolation;
    numberOfPages: number;
}
export default function Indicator(props: IndicatorProps): JSX.Element;
export {};
