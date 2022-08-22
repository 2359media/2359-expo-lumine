import { APIFn, APIClient, APIState } from './types';
export default function createAPIState<P extends any[], D>(config: {
    api: APIFn<P, D>;
    client?: APIClient;
    callback?(): void;
    track?(event: string, body?: object): void;
    mounted?: boolean;
    useMockData?: boolean;
}): APIState<P, D>;
