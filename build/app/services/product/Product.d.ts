export interface Product<T> {
    id: string;
    groupId: 'Components' | 'Screens' | 'Technologies';
    component?(props: T): any;
    defaultProps?: Partial<T>;
    types?: {
        [key: string]: Partial<T>;
    };
    modifiers?: {
        [key: string]: {
            [key: string]: Partial<T>;
        };
    };
}
export declare function addProduct<T>(product: Product<T>): void;
export declare function getProductsByGroupId(groupId: string): Product<any>[];
export declare function getProductById(id: string): Product<any> | undefined;
