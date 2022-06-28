export declare type Env = 'dev' | 'staging' | 'prod' | 'default';
export declare function selectEnv<T>(envs: Partial<{
    [key in Env]: T;
}>): T;
export declare function setEnv(env?: Env): void;
export declare function getEnv(): Env;
export declare function loadEnv(): Promise<void>;
