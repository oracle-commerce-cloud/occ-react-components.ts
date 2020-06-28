import $ from "jquery";
import { RestClient, restClientFactory } from "../helpers/restClient";
import model from "./Model";
import navigation from "./Navigation";

const occDependencies = {
  $,
  navigation,
  ko: null,
  ccConstants: null,
  ccRestClient: null,
  pubsub: { topicNames: {} },
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
