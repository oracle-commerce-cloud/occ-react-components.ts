import $ from "jquery";
import { miRestClientFactory, MiRestClientService } from "../helpers/miRestClientService";
import { resources } from "./snippets/ns.customreactwidget2.json";

export const occDependencies = {
  $,
  ko: null,
  ccConstants: null,
  ccRestClient: null,
};

export const model = {
  id() {
    return "id";
  },
  user() {
    return {
      firstName: () => "firstNameMok",
      lastName: () => "lastNameMok",
      email: () => "test@email.com",
    };
  },
  site() {
    return {
      siteInfo: { id: "site-UK" },
    };
  },
  locale() {
    return "locale";
  },
  product() {
    return {
      id: () => "productId",
      displayName: () => "Product name",
    };
  },
  supportedLocales() {
    return [];
  },
  translate(resourcesKey: string, params?: any) {
    let value = (resources as any)[resourcesKey];
    if (!value) {
      console.log(resourcesKey); // tslint:disable-line
    } else if (params) {
      Object.entries(params).map(([key, paramValue]) => (value = value.replace(`__${key}__`, paramValue)));
    }
    return value || resourcesKey;
  },
};

let $RestClient: MiRestClientService;
let miRestClient: MiRestClientService;

export const propsFactory = () => {
  const { ccRestClient } = occDependencies;
  $RestClient = $RestClient || miRestClientFactory($);
  miRestClient = miRestClient || miRestClientFactory(ccRestClient);

  return {
    model,
    $RestClient,
    miRestClient,
    ...model,
    ...occDependencies,
  };
};
