import useSWR, { ConfigInterface } from "swr";
import { useContext } from "react";
import { CommerceCloudContext } from "../context/CommerceCloudContext";
import { UseApiFetcher } from "../types/UseApi";

export function useApi<T>(key: any, fetcher: UseApiFetcher<T>, config?: ConfigInterface) {
  const { ccConstants, $RestClient, ocRestClient } = useContext(CommerceCloudContext);

  return useSWR(key, (url, params) => fetcher({ ccConstants, $RestClient, ocRestClient, url, params }), config);
}
