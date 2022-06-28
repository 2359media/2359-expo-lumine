import {useState, useEffect} from 'react';
import {createStore, DeepPartial} from 'redux';
import {persistStore} from 'redux-persist';
import {State, initialState} from './state';
import reducer, {actionTypes} from './reducer';
import {loadEnv} from '../env';

const devTools: any = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(reducer, devTools && devTools());

let persistor: any;

export const getState = store.getState;

export const subscribe = store.subscribe;

export function updateState(newState: DeepPartial<State>) {
  store.dispatch({type: actionTypes.update, payload: newState});
}

export function resetStateExcept(keys: (keyof State)[]) {
  const resetState: any = {...initialState};
  keys.forEach(k => delete resetState[k]);
  store.dispatch({type: actionTypes.reset, payload: resetState});
}

export function useSelector<T>(fn: (s: State) => T): T {
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
  });
}
