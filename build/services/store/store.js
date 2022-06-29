import { useState, useEffect } from 'react';
import { createStore as createReduxStore } from 'redux';
import { persistStore } from 'redux-persist';
import { actionTypes, createReducer } from './reducer';
import { loadEnv } from '../env';
export function createStore(props) {
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__;
    let persistor;
    const store = createReduxStore(createReducer(props.initialState), devTools && devTools());
    const getState = store.getState;
    const subscribe = store.subscribe;
    function updateState(newState) {
        store.dispatch({ type: actionTypes.update, payload: newState });
    }
    function resetStateExcept(keys) {
        const resetState = { ...props.initialState };
        keys.forEach(k => delete resetState[k]);
        store.dispatch({ type: actionTypes.reset, payload: resetState });
    }
    function useSelector(fn) {
        const [state, setState] = useState(() => fn(store.getState()));
        useEffect(() => {
            return store.subscribe(() => {
                const newState = fn(store.getState());
                newState != state && setState(newState);
            });
        }, [state]);
        return state;
    }
    async function loadStore() {
        await loadEnv();
        await new Promise(resolve => {
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
    }
    return {
        getState,
        subscribe,
        updateState,
        resetStateExcept,
        useSelector,
        loadStore,
    };
}
//# sourceMappingURL=store.js.map