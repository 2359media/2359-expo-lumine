export declare const actionTypes: {
    update: string;
    reset: string;
};
export declare function createReducer<T extends Object>(initialState: T): (state: T | undefined, action: any) => T;
