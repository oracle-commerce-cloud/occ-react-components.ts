import React, { Context, createContext } from "react";
import { httpClientsFactory } from "../helpers/httpCliensFactory";
import { MiRestClientService } from "../helpers/miRestClientService";
import { CCDependencies, CCModel, CCProps } from "../types";

interface IRequireContext extends CCDependencies, CCModel {
  model: CCModel;
  $RestClient: MiRestClientService;
  miRestClient: MiRestClientService;
}

export const RequireContext = createContext<IRequireContext | {}>({}) as Context<IRequireContext>;
export const { Provider } = RequireContext;

export const propsFactory = ({ occDependencies, model }: CCProps): IRequireContext => {
  const { $RestClient, miRestClient } = httpClientsFactory(occDependencies);

  return {
    model,
    $RestClient,
    miRestClient,
    ...model,
    ...occDependencies,
  };
};

export const RequireWidgetContext = ({ occDependencies, model, render }: any) => (
  <Provider value={propsFactory({ occDependencies, model })}>{render && render()}</Provider>
);
