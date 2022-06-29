import {useState, useEffect} from 'react';
import {createStore as createReduxStore, DeepPartial} from 'redux';
import {persistStore} from 'redux-persist';
import {actionTypes, createReducer} from './reducer';
import {loadEnv} from '../env';

interface StoreProps<T> {
  initialState: T;
}

export function createStore<T extends Object>(props: StoreProps<T>) {
  const devTools: any = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

  let persistor: any;

  const store = createReduxStore(
    createReducer(props.initialState),
    devTools && devTools()
  );

  const getState = store.getState;
  const subscribe = store.subscribe;

  function updateState(newState: DeepPartial<T>) {
    store.dispatch({type: actionTypes.update, payload: newState});
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
