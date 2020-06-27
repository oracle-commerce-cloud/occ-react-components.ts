import $ from "jquery";
import { restClientFactory, RestClient } from "../helpers/restClient";
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

let $RestClient: RestClient;
let ocRestClient: RestClient;

export const propsFactory = () => {
  const { ccRestClient } = occDependencies;
  $RestClient = $RestClient || restClientFactory($);
  ocRestClient = ocRestClient || restClientFactory(ccRestClient);

  return {
    model,
    $RestClient,
    ocRestClient,
    ...model,
    ...occDependencies,
  };
};
