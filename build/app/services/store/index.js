import { createStore } from '../../..';
const store = createStore({
    initialState: {
        settings: {
            themeIndex: 0,
            styleIndex: 0,
        },
    },
});
export const { getState, loadStore, updateState, useSelector } = store;
