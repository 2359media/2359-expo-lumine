import { persistReducer } from 'redux-persist';
import storage from './storage';
import { deepMerge } from './utils';
export const actionTypes = {
    update: 'update',
    reset: 'reset',
};
export function createReducer(initialState) {
    const persistReducers = {};
    Object.keys(initialState).forEach(key => {
        persistReducers[key] = persistReducer({ key, storage }, (state, action) => {
            if (action.payload && action.payload[key]) {
                if (action.type == actionTypes.update) {
                    return deepMerge(state, action.payload[key]);
                }
                else if (action.type == actionTypes.reset) {
                    return action.payload[key];
                }
            }
            return state;
        });
    });
    return function reducer(state = initialState, action) {
        const newState = {};
        Object.keys(state).forEach(key => {
            newState[key] = persistReducers[key](state[key], action);
        });
        return newState;
    };
}
