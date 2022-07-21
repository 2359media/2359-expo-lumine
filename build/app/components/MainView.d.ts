/// <reference types="react" />
interface MainViewProps {
    topImage?: any;
    topTitle?: string;
    topDesc?: string;
    topContent?: any;
    title?: string;
    desc?: string;
    tint?: string;
    tintD1?: string;
    backgroundTint?: string;
    actionText?: string;
    coverImage?: any;
    logoImage?: any;
    action?(): void;
}
export declare function MainView(props: MainViewProps): JSX.Element;
export {};
