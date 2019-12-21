export interface CCModel {
  id(): any;
  user(): any;
  site(): any;
  locale(): any;
  product(): any;
  supportedLocales(): any[];
  translate(resourcesKey: string, params?: any): string;
}
