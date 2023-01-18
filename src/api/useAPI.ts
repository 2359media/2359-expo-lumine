import {useContext, useEffect, useMemo, useState} from 'react';
import {APIContext} from './context';
import createAPIState from './createAPIState';
import m from '../modules';
import {APIFn, APIState} from './types';

export default function useAPI<P extends any[], D>(
  api: APIFn<P, D>
): APIState<P, D> {
  const [_, setCounter] = useState(0);
  const context = useContext(APIContext);
  const {track} = m.Analytics.useAnalytics();

  const config = useMemo(() => {
    const callback = () => setCounter(c => c + 1);
    return {api, callback, mounted: true, track, ...context};
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

export function useResult<T>(value: T, fn: (v: NonNullable<T>) => void): void {
  useEffect(() => {
    value != null && fn(value!);
  }, [value]);
}
