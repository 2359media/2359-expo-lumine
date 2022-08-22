import { DeepPartial } from 'redux';
interface StoreProps<T> {
    initialState: T;
}
export interface Store<T extends object> {
    getState(): T;
    subscribe(l: () => void): () => void;
    updateState(newState: DeepPartial<T> | ((state: T) => DeepPartial<T>)): void;
    resetStateExcept(keys: (keyof T)[]): void;
    useSelector<S>(fn: (s: T) => S): S;
    loadStore(): Promise<void>;
}
export declare function createStore<T extends object>(props: StoreProps<T>): Store<T>;
export {};
