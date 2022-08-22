import {useState, useEffect} from 'react';
import {createStore as createReduxStore, DeepPartial} from 'redux';
import {persistStore} from 'redux-persist';
import {actionTypes, createReducer} from './reducer';
import {loadEnv} from '../env';

interface StoreProps<T> {
  initialState: T;
}

export interface Store<T extends object> {
  getState(): T;
  subscribe(l: () => void): () => void;
  updateState(newState: DeepPartial<T> | ((state: T) => DeepPartial<T>)): void;
  resetStateExcept(keys: (keyof T)[]): void;
  useSelector<S>(fn: (s: T) => S): S;
  loadStore(): Promise<void>;
}

export function createStore<T extends object>(props: StoreProps<T>): Store<T> {
  const devTools: any = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

  let persistor: any;

  const store = createReduxStore(
    createReducer(props.initialState),
    devTools && devTools()
  );

  const getState = store.getState;
  const subscribe = store.subscribe;

  function updateState(
    newState: DeepPartial<T> | ((state: T) => DeepPartial<T>)
  ) {
    store.dispatch({
      type: actionTypes.update,
      payload:
        typeof newState == 'function' ? newState(store.getState()) : newState,
    });
  }

  function resetStateExcept(keys: (keyof T)[]) {
    const resetState: any = {...props.initialState};
    keys.forEach(k => delete resetState[k]);
    store.dispatch({type: actionTypes.reset, payload: resetState});
  }

  function useSelector<S>(fn: (s: T) => S): S {
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
      let unsubscribe = () => {};
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
