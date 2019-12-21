import { MiRestClientService } from "../helpers/miRestClientService";

export interface UseApiFetcherParams {
  url?: string;
  params?: any;
  data?: any;
  ccConstants: any;
  miRestClient: MiRestClientService;
  $RestClient: MiRestClientService;
}

export type UseApiFetcher<T> = (useApiConfig: UseApiFetcherParams) => Promise<T>;
