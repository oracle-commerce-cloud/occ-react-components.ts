export interface MiRestClientEndpoint {
  url: string;
  type?: string;
  method?: string;
  baseUrl?: string;
  dataType?: string;
  contentType?: string;
  headers?: any;
}

export interface MiRestClientService {
  request(options: { endpoint: string | MiRestClientEndpoint; data?: any; params?: any }): Promise<any>;
}

export const miRestClientFactory = (httpClient: any): MiRestClientService => {
  return {
    request({ endpoint, data, params }): Promise<any> {
      return new Promise((resolve, reject) => {
        if (httpClient.request) {
          httpClient.request(
            endpoint,
            data,
            (response: any) => resolve(response),
            (erreur: any) => reject(erreur),
            params,
          );
        } else if (httpClient.ajax && typeof endpoint !== "string") {
          httpClient.ajax({
            ...endpoint,
            data,
            type: endpoint.method || endpoint.type,
            dataType: endpoint.dataType || "json",
            url: (endpoint.baseUrl || window.location.origin) + endpoint.url,
            contentType: endpoint.contentType || "application/json; charset=utf-8",
            success: (response: any) => resolve(response),
            error: (error: any) => reject(error),
          });
        }
      });
    },
  };
};
