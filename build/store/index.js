import { useState, useEffect } from 'react';
import { createStore as createReduxStore } from 'redux';
import m from '../modules';
import { persistStore, persistReducer } from 'redux-persist';
import { deepMerge, wait } from '../utils';
const loadPromises = [];
const actionTypes = {
    update: 'update',
    reset: 'reset',
};
function createReducer(p) {
    function reducer(state = p.initialState, action) {
        if (action.type == actionTypes.update) {
            return deepMerge(state, action.payload);
        }
        else if (action.type == actionTypes.reset) {
            return action.payload;
        }
        return state;
    }
    if (p.key) {
        return persistReducer({ key: p.key, storage: p.isSecure ? secureStorage : storage }, reducer);
    }
    return reducer;
}
const storage = {
    setItem: (key, value) => m.Storage.setItem(key, value),
    getItem: (key) => m.Storage.getItem(key),
    removeItem: (key) => m.Storage.removeItem(key),
};
const secureStorage = {
    setItem: (key, value) => m.SecureStorage.setItemAsync(key, value),
    getItem: (key) => m.SecureStorage.getItemAsync(key),
    removeItem: (key) => m.SecureStorage.deleteItemAsync(key),
};
export function createStore(p = {}) {
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__;
    const store = createReduxStore(createReducer(p), devTools && devTools());
    const get = store.getState;
    const subscribe = store.subscribe;
    async function update(ns = s => s) {
        await wait();
        const payload = typeof ns == 'function' ? ns(store.getState()) : ns;
        store.dispatch({ type: actionTypes.update, payload });
        return store.getState();
    }
    async function reset() {
        await wait();
        store.dispatch({ type: actionTypes.reset, payload: p.initialState });
        return store.getState();
    }
    function use(fn) {
        const [state, setState] = useState(() => fn ? fn(store.getState()) : store.getState());
        useEffect(() => {
            return store.subscribe(() => {
                const newState = fn ? fn(store.getState()) : store.getState();
                newState != state && setState(newState);
            });
        }, [state]);
        return state;
    }
    function load() {
        return new Promise(resolve => {
            const persistor = persistStore(store);
            let unsubscribe = () => { };
            function handlePersistorState() {
                if (persistor.getState().bootstrapped) {
                    unsubscribe();
                    resolve();
                }
            }
            unsubscribe = persistor.subscribe(handlePersistorState);
            handlePersistorState();
        });
    }
    loadPromises.push(load());
    return {
        get,
        subscribe,
        update,
        reset,
        use,
    };
}
export function loadStores() {
    return Promise.allSettled(loadPromises);
}
