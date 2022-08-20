import findErrorMessage from './findErrorMessage';
import {APIFn, APIClient, APIState} from './types';

export default function createAPIState<P extends any[], D>(config: {
  api: APIFn<P, D>;
  client?: APIClient;
  callback?(): void;
  mounted?: boolean;
  useMockData?: boolean;
}): APIState<P, D> {
  const state = {
    loading: false,
    loadingMore: false,
    refreshing: false,
  } as APIState<P, D>;

  function updateState(newState: Partial<APIState<P, D>>) {
    Object.assign(state, {
      loading: false,
      loadingMore: false,
      refreshing: false,
      ...newState,
    });
    !(config.mounted === false) && config.callback?.();
  }

  async function fetchAPI(initialState: Partial<APIState<P, D>>, ...args: P) {
    if (
      !config.mounted ||
      state.loading ||
      state.loadingMore ||
      state.refreshing ||
      (initialState.loadingMore && !state.more)
    ) {
      return;
    }
    let api: any = config.api(...args);

    if (config.useMockData && !api.getMockData) {
      updateState({error: "mock data doesn't exist"});
      return;
    }
    const params = {
      client: config.client,
      data: initialState.loadingMore ? state.data : undefined,
      more: initialState.loadingMore ? state.more : undefined,
    };
    if (config.useMockData) {
      api = api.getMockData(params);
    } else if (api.getData) {
      api = api.getData(params);
    }
    if (api.then) {
      updateState({...initialState, error: undefined});
      try {
        api = await api;
      } catch (error: any) {
        updateState({error: findErrorMessage(error)});
        return;
      }
    }
    if (typeof api === 'object' && api.hasOwnProperty('data')) {
      updateState(api);
    } else {
      updateState({data: api});
    }
  }

  state.request = (...args: P) => {
    fetchAPI({loading: true}, ...args);
  };
  state.loadMore = (...args: P) => {
    fetchAPI({loadingMore: true}, ...args);
  };
  state.refresh = (...args: P) => {
    fetchAPI({refreshing: true}, ...args);
  };

  return state;
}
