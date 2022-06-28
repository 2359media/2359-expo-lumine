import { persistReducer } from 'redux-persist';
import storage from './storage';
import { initialState } from './state';
export const actionTypes = {
    update: 'update',
    reset: 'reset',
};
function deepMerge(state, newState) {
    if (state &&
        newState &&
        typeof newState == 'object' &&
        !Array.isArray(newState)) {
        const mergedState = { ...state };
        Object.keys(newState).forEach(k => {
            mergedState[k] = deepMerge(state[k], newState[k]);
        });
        return mergedState;
    }
    return newState;
}
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
export default function (state = initialState, action) {
    const newState = {};
    Object.keys(state).forEach(key => {
        newState[key] = persistReducers[key](state[key], action);
    });
    return newState;
}
//# sourceMappingURL=reducer.js.map