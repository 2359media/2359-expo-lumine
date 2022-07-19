import {createStore, Theme} from '../../..';

interface State {
  settings: {
    theme?: Theme;
  };
}

const store = createStore<State>({
  initialState: {
    settings: {},
  },
});

export const {getState, loadStore, updateState, useSelector} = store;
