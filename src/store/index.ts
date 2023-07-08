import {useState, useEffect} from 'react';
import {createStore as createReduxStore, DeepPartial, Reducer} from 'redux';
import m from '../modules';
import {persistStore, persistReducer} from 'redux-persist';
import {deepMerge, wait} from '../utils';

export interface Store<T extends object> {
  get(): T;
  subscribe(l: () => void): () => void;
  update(newState: NewState<T>): Promise<T>;
  reset(): Promise<T>;
  use(): T;
  use<S>(fn: (s: T) => S): S;
}

interface StoreProps<T> {
  initialState?: T;
  key?: string;
  isSecure?: boolean;
}

type NewState<T> = DeepPartial<T> | ((state: T) => DeepPartial<T>);

const loadPromises: Promise<any>[] = [];

const actionTypes = {
  update: 'update',
  reset: 'reset',
};

function createReducer<T extends Object>(p: StoreProps<T>): Reducer<T, any> {
  function reducer(state = p.initialState, action: any): T {
    if (action.type == actionTypes.update) {
      return deepMerge(state, action.payload) as T;
    } else if (action.type == actionTypes.reset) {
      return action.payload;
    }
    return state as T;
  }

  if (p.key) {
    return persistReducer(
      {key: p.key, storage: p.isSecure ? secureStorage : storage},
      reducer
    ) as any;
  }
  return reducer;
}

const storage = {
  setItem: (key: string, value: any) => m.Storage.setItem(key, value),
  getItem: (key: string) => m.Storage.getItem(key),
  removeItem: (key: string) => m.Storage.removeItem(key),
};

const secureStorage = {
  setItem: (key: string, value: any) =>
    m.SecureStorage.setItemAsync(key, value),
  getItem: (key: string) => m.SecureStorage.getItemAsync(key),
  removeItem: (key: string) => m.SecureStorage.deleteItemAsync(key),
};

export function createStore<T extends object>(p: StoreProps<T> = {}): Store<T> {
  const devTools: any = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

  const store = createReduxStore(createReducer(p), devTools && devTools());

  const get = store.getState as () => T;
  const subscribe = store.subscribe;

  async function update(ns: NewState<T> = s => s): Promise<T> {
    await wait();
    const payload = typeof ns == 'function' ? ns(store.getState() as T) : ns;
    store.dispatch({type: actionTypes.update, payload});
    return store.getState() as T;
  }

  async function reset(): Promise<T> {
    await wait();
    store.dispatch({type: actionTypes.reset, payload: p.initialState});
    return store.getState() as T;
  }

  function use<S>(fn?: (s: T) => S): S extends unknown ? T : S {
    const [state, setState] = useState(() =>
      fn ? fn(store.getState() as T) : store.getState()
    );
    useEffect(() => {
      return store.subscribe(() => {
        const newState = fn ? fn(store.getState() as T) : store.getState();
        newState != state && setState(newState);
      });
    }, [state]);
    return state as any;
  }

  function load(): Promise<void> {
    return new Promise(resolve => {
      const persistor = persistStore(store);
      let unsubscribe = () => {};
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
  if (p.key) {
    loadPromises.push(load());
  }

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
