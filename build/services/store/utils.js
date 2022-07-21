export function deepMerge(state, newState) {
    if (state &&
        newState &&
        state !== newState &&
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
