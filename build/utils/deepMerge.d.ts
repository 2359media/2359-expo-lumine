export declare type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
export declare function deepMerge<T>(s1: T, s2: DeepPartial<T>): T;
