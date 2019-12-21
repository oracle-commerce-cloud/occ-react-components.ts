import { UseApiFetcher } from "../types/UseApi";

export const fetchWithParams: UseApiFetcher<any> = async ({ $RestClient, url, params }) => {
  return $RestClient.request({
    endpoint: {
      url: url || "/ccstorex/custom/v1/api",
      type: "GET",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
    },
    data: params,
  });
};
