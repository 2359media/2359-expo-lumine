declare type Options<T extends Object> = Partial<{
    [key in keyof T]: T[key][];
}>;
interface Helpers<T extends Object> {
    setState(newState: Partial<T> | ((oldState: Partial<T>) => Partial<T>)): void;
}
export interface Story<T extends Object> {
    name: string;
    Component: (p: T) => any;
    options?: Options<T> | ((helpers: Helpers<T>) => Options<T>);
    radios?: (keyof T)[][];
}
export declare function createStory<T extends Object>({ name, Component, options: ops, radios, }: Story<T>): {
    component: () => JSX.Element;
    name: string;
};
export {};
