import {persistReducer} from 'redux-persist';
import storage from './storage';
import {deepMerge} from './utils';

export const actionTypes = {
  update: 'update',
  reset: 'reset',
};

export function createReducer<T extends Object>(initialState: T) {
  const persistReducers: any = {};

  Object.keys(initialState).forEach(key => {
    persistReducers[key] = persistReducer(
      {key, storage},
      (state: any, action: any) => {
        if (action.payload && action.payload[key]) {
          if (action.type == actionTypes.update) {
            return deepMerge(state, action.payload[key]);
          } else if (action.type == actionTypes.reset) {
            return action.payload[key];
          }
        }
        return state;
      }
    );
  });

  return function reducer(state = initialState, action: any): T {
    const newState: any = {};
    Object.keys(state).forEach(key => {
      newState[key] = persistReducers[key](
        state[key as keyof typeof state],
        action
      );
    });
    return newState;
  };
}
