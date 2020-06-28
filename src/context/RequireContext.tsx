import React, { Context, createContext } from "react";
import { httpClientsFactory, RestClient } from "../helpers/restClient";
import { CCDependencies, CCModel, CCProps } from "../types";

interface IRequireContext extends CCDependencies, CCModel {
  model: CCModel;
  $RestClient: RestClient;
  ocRestClient: RestClient;
}

export const RequireContext = createContext<IRequireContext | {}>({}) as Context<IRequireContext>;
export const { Provider } = RequireContext;

export const propsFactory = ({ occDependencies, model }: CCProps): IRequireContext => {
  const { $RestClient, ocRestClient } = httpClientsFactory(occDependencies);

  return {
    model,
    $RestClient,
    ocRestClient,
    ...model,
    ...occDependencies,
  };
};

export const RequireWidgetContext = ({ occDependencies, model, children }: any) => (
  <Provider value={propsFactory({ occDependencies, model })}>
    {children && typeof children === "function" && children()}
    {children && typeof children !== "function" && children}
  </Provider>
);
