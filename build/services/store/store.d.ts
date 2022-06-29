import { DeepPartial } from 'redux';
interface StoreProps<T> {
    initialState: T;
}
export declare function createStore<T extends Object>(props: StoreProps<T>): {
    getState: () => T;
    subscribe: (listener: () => void) => import("redux").Unsubscribe;
    updateState: (newState: DeepPartial<T>) => void;
    resetStateExcept: (keys: (keyof T)[]) => void;
    useSelector: <S>(fn: (s: T) => S) => S;
    loadStore: () => Promise<void>;
};
export {};
