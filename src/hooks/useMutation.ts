import { mutate } from "swr";
import { useCallback, useContext } from "react";
import { CommerceCloudContext } from "../context/CommerceCloudContext";
import { UseApiFetcher } from "../types/UseApi";

export function useMutation<T>(key: any, fetcher: UseApiFetcher<T>) {
  const { ccConstants, $RestClient, ocRestClient } = useContext(CommerceCloudContext);

  const mutateCallback = useCallback(
    (url?: string, data?: any, params?: any): any => async () => {
      const remoteData = await fetcher({ ccConstants, $RestClient, ocRestClient, url, params, data });
      mutate(key, remoteData);
    },
    // eslint-disable-next-line
    [key],
  );

  if (key) {
    // mutateCallback
    return mutateCallback;
  }

  return (url?: string, data?: any, params?: any): any =>
    fetcher({ ccConstants, $RestClient, ocRestClient, url, params, data });
}
