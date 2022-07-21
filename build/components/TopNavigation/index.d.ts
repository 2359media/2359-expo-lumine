/// <reference types="react" />
import { ButtonProps } from '../Button';
interface Props {
    title?: string;
    backButton?: ButtonProps;
    left?: any;
    rightButtons?: ButtonProps[];
    right?: any;
    center?: any;
}
export declare function TopNavigation(props: Props): JSX.Element;
export {};
