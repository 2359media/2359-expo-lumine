import { useState, useEffect } from 'react';
import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { initialState } from './state';
import reducer, { actionTypes } from './reducer';
import { loadEnv } from '../env';
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(reducer, devTools && devTools());
let persistor;
export const getState = store.getState;
export const subscribe = store.subscribe;
export function updateState(newState) {
    store.dispatch({ type: actionTypes.update, payload: newState });
}
export function resetStateExcept(keys) {
    const resetState = { ...initialState };
    keys.forEach(k => delete resetState[k]);
    store.dispatch({ type: actionTypes.reset, payload: resetState });
}
export function useSelector(fn) {
    const [state, setState] = useState(() => fn(store.getState()));
    useEffect(() => {
        return store.subscribe(() => {
            const newState = fn(store.getState());
            newState != state && setState(newState);
        });
    }, [state]);
    return state;
}
export function loadStore() {
    return loadEnv().then(() => {
        return new Promise(resolve => {
            persistor = persistStore(store);
            let unsubscribe = () => { };
            function handlePersistorState() {
                if (persistor.getState().bootstrapped) {
                    unsubscribe();
                    resolve(true);
                }
            }
            handlePersistorState();
            unsubscribe = persistor.subscribe(handlePersistorState);
        });
    });
}
//# sourceMappingURL=store.js.map