/// <reference types="react" />
import { TextProps } from 'react-native';
import { SharedValue } from '../../../modules/reanimated';
interface AnimatedTitleProps extends TextProps {
    focus?: SharedValue<boolean>;
    forceOnTop?: boolean;
    type?: string;
}
export declare function AnimatedTitle(props: AnimatedTitleProps): JSX.Element;
export {};
