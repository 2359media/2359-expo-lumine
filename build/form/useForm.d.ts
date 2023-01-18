declare type Config = {
    initialValue?: any;
    editable?: boolean;
    optional?: boolean;
    validator?(value: any, otherInput: any): string | undefined;
};
declare type SubConfig = {
    [key: string]: {
        input?: SubConfig | [SubConfig];
    } & Config;
};
declare type RootConfig = {
    input: SubConfig;
    draftId?: string;
    submitChangesOnly?: boolean;
    submit?(values: any): void;
};
declare type Input<T = any> = {
    value?: T;
    onValueChange(value?: T): void;
    hasNextInput?: boolean;
    onNext?(): void;
    error?: string;
    optional?: boolean;
    editable?: boolean;
    edited?: boolean;
    inputRef?(r: any): {
        focus?(): void;
    };
};
declare type SubForm<T extends SubConfig> = {
    [K in keyof T]: T[K]['input'] extends SubConfig ? SubForm<T[K]['input']> : T[K]['input'] extends SubConfig[] ? {
        add(): void;
        remove(index: number): void;
        inputs: SubForm<T[K]['input'][0]>[];
    } : Input<T[K]['initialValue'] | any>;
};
export declare type Form<T extends RootConfig> = {
    input: SubForm<T['input']>;
    submitDisabled: boolean;
    submit(): void;
    getValues(changesOnly?: boolean): any;
    hasUnsavedChanges: boolean;
    setValues(values: any): void;
    saveDraft(): void;
    deleteDraft(): void;
};
export declare function useForm<T extends RootConfig>(config: T): Form<T>;
export declare type InputProps<T> = Input<T>;
export {};
