import { resources } from "./snippets/ns.customreactwidget2.json";

const translate = (resourcesKey: string, params?: any) => {
  let value = (resources as any)[resourcesKey];
  if (!value) {
    // console.log(resourcesKey); // tslint:disable-line
  } else if (params) {
    Object.entries(params).map(([key, paramValue]) => (value = value.replace(`__${key}__`, paramValue)));
  }
  return value || resourcesKey;
};

export default translate;
