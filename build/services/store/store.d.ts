import { DeepPartial } from 'redux';
import { State } from './state';
export declare const getState: () => State;
export declare const subscribe: (listener: () => void) => import("redux").Unsubscribe;
export declare function updateState(newState: DeepPartial<State>): void;
export declare function resetStateExcept(keys: (keyof State)[]): void;
export declare function useSelector<T>(fn: (s: State) => T): T;
export declare function loadStore(): Promise<unknown>;
