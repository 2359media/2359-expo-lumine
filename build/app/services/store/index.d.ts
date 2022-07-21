interface State {
    settings: {
        themeIndex: number;
        styleIndex: number;
    };
}
export declare const getState: () => State, loadStore: () => Promise<void>, updateState: (newState: import("redux").DeepPartial<State> | ((state: State) => import("redux").DeepPartial<State>)) => void, useSelector: <S>(fn: (s: State) => S) => S;
export {};
