import { RestClient } from "../helpers/restClient";

export interface UseApiFetcherParams {
  url?: string;
  params?: any;
  data?: any;
  ccConstants: any;
  ocRestClient: RestClient;
  $RestClient: RestClient;
}

export type UseApiFetcher<T> = (useApiConfig: UseApiFetcherParams) => Promise<T>;
