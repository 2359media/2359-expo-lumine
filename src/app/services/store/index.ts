import {createStore} from '../../..';

interface State {
  settings: {
    themeIndex: number;
    styleIndex: number;
  };
}

const store = createStore<State>({
  initialState: {
    settings: {
      themeIndex: 0,
      styleIndex: 0,
    },
  },
});

export const {getState, loadStore, updateState, useSelector} = store;
