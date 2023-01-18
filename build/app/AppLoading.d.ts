interface Props {
    asyncs: ((updateText: (t: string) => void) => Promise<any>)[];
    SplashView?: any;
    children: any;
}
export declare function AppLoading({ asyncs, children, SplashView }: Props): JSX.Element;
export {};
