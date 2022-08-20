export type APIClient = (req: {
  path: string;
  method?: 'GET' | 'POST' | 'DELETE' | 'PUT';
  params?: any;
  data?: any;
  headers?: any;
}) => Promise<{data: any}>;

type APIReq<D> = {client: APIClient; data?: D; more?: any};
type APIData<D> = {data: D; more?: any} | D;
type APIResp<D> = APIData<D> | Promise<APIData<D>>;

export type API<D> =
  | {
      getData(req: APIReq<D>): APIResp<D>;
      getMockData?(req: APIReq<D>): APIResp<D>;
    }
  | APIResp<D>;

export type APIFn<P extends any[], D> = (...args: P) => API<D>;

export type APIState<P extends any[], D> = {
  loading: boolean;
  loadingMore: boolean;
  refreshing: boolean;
  data?: D;
  error?: string;
  more?: any;
  request(...args: P): void;
  refresh(...args: P): void;
  loadMore(...args: P): void;
  updateData(fn: (oldData?: D) => D | D): void;
};

export interface APIConfig {
  client: APIClient;
  useMockData?: boolean;
}
