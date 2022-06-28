import {persistReducer} from 'redux-persist';
import storage from './storage';
import {State, initialState} from './state';

export const actionTypes = {
  update: 'update',
  reset: 'reset',
};

function deepMerge(state: any, newState: any): any {
  if (
    state &&
    newState &&
    typeof newState == 'object' &&
    !Array.isArray(newState)
  ) {
    const mergedState = {...state};
    Object.keys(newState).forEach(k => {
      mergedState[k] = deepMerge(state[k], newState[k]);
    });
    return mergedState;
  }
  return newState;
}

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

export default function (state: State = initialState, action: any): State {
  const newState: any = {};
  Object.keys(state).forEach(key => {
    newState[key] = persistReducers[key](state[key as keyof State], action);
  });
  return newState;
}
