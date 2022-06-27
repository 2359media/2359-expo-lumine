interface Props {
    asyncs: ((updateText: (t: string) => void) => Promise<any>)[];
    children: any;
}
export declare function AppLoading({ asyncs, children }: Props): JSX.Element;
export {};
