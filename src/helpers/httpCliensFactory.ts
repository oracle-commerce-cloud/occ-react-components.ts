import { CCDependencies } from "../types";
import { miRestClientFactory, MiRestClientService } from "./miRestClientService";

let $RestClient: MiRestClientService;
let miRestClient: MiRestClientService;

export const httpClientsFactory = (occDependencies: CCDependencies) => {
  const { ccRestClient, $ } = occDependencies;
  $RestClient = $RestClient || miRestClientFactory($);
  miRestClient = miRestClient || miRestClientFactory(ccRestClient);

  return {
    $RestClient,
    miRestClient,
  };
};
