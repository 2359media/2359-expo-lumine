import { APIFn, APIState } from './types';
export default function useAPI<P extends any[], D>(api: APIFn<P, D>): APIState<P, D>;
export declare function useResult<T>(value: T, fn: (v: NonNullable<T>) => void): void;
