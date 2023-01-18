import { useContext, useEffect, useMemo, useState } from 'react';
import { APIContext } from './context';
import createAPIState from './createAPIState';
import m from '../modules';
export default function useAPI(api) {
    const [_, setCounter] = useState(0);
    const context = useContext(APIContext);
    const { track } = m.Analytics.useAnalytics();
    const config = useMemo(() => {
        const callback = () => setCounter(c => c + 1);
        return { api, callback, mounted: true, track, ...context };
    }, []);
    config.api = api;
    Object.assign(config, context);
    useEffect(() => {
        return () => {
            config.mounted = false;
        };
    }, []);
    return useMemo(() => createAPIState(config), []);
}
export function useResult(value, fn) {
    useEffect(() => {
        value != null && fn(value);
    }, [value]);
}
