import findErrorMessage from './findErrorMessage';
export default function createAPIState(config) {
    const state = {
        loading: false,
        loadingMore: false,
        refreshing: false,
    };
    function updateState(newState) {
        Object.assign(state, {
            loading: false,
            loadingMore: false,
            refreshing: false,
            ...newState,
        });
        !(config.mounted === false) && config.callback?.();
    }
    async function fetchAPI(initialState, ...args) {
        if (!config.mounted ||
            state.loading ||
            state.loadingMore ||
            state.refreshing ||
            (initialState.loadingMore && !state.more)) {
            return;
        }
        let api = config.api(...args);
        if (config.useMockData && !api.getMockData) {
            updateState({ error: "mock data doesn't exist" });
            return;
        }
        const params = {
            client: config.client,
            data: initialState.loadingMore ? state.data : undefined,
            more: initialState.loadingMore ? state.more : undefined,
        };
        if (config.useMockData) {
            api = api.getMockData(params);
        }
        else if (api.getData) {
            api = api.getData(params);
        }
        if (api.then) {
            updateState({ ...initialState, error: undefined });
            await new Promise(r => setTimeout(r, 100));
            try {
                api = await api;
            }
            catch (error) {
                updateState({ error: findErrorMessage(error) });
                return;
            }
        }
        if (typeof api === 'object' && api.hasOwnProperty('data')) {
            updateState(api);
        }
        else {
            updateState({ data: api });
        }
    }
    state.request = (...args) => {
        fetchAPI({ loading: true }, ...args);
    };
    state.loadMore = (...args) => {
        fetchAPI({ loadingMore: true }, ...args);
    };
    state.refresh = (...args) => {
        fetchAPI({ refreshing: true }, ...args);
    };
    return state;
}
