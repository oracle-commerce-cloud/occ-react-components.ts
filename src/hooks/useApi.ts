import useSWR, { ConfigInterface } from "@aboulman/swr";
import { useContext } from "react";
import { RequireContext } from "../context/RequireContext";
import { UseApiFetcher } from "../types/UseApi";

export function useApi<T>(key: any, fetcher: UseApiFetcher<T>, config?: ConfigInterface) {
  const { ccConstants, $RestClient, miRestClient } = useContext(RequireContext);

  return useSWR(key, (url, params) => fetcher({ ccConstants, $RestClient, miRestClient, url, params }), config);
}
