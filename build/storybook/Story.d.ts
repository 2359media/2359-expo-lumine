export interface Story<T extends Object> {
    name: string;
    Component: (p: T) => any;
    options?: Partial<{
        [key in keyof T]: any[];
    }>;
}
export declare function createStory<T extends Object>({ name, Component, options, }: Story<T>): {
    component: () => JSX.Element;
    name: string;
};
