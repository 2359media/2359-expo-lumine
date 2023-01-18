import { DeepPartial } from 'redux';
export interface Store<T extends object> {
    get(): T;
    subscribe(l: () => void): () => void;
    update(newState: NewState<T>): Promise<T>;
    reset(): Promise<T>;
    use<S>(fn?: (s: T) => S): S extends unknown ? T : S;
}
interface StoreProps<T> {
    initialState?: T;
    key?: string;
    isSecure?: boolean;
}
declare type NewState<T> = DeepPartial<T> | ((state: T) => DeepPartial<T>);
export declare function createStore<T extends object>(p?: StoreProps<T>): Store<T>;
export declare function loadStores(): Promise<PromiseSettledResult<any>[]>;
export {};
