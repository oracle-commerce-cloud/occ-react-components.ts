export default {
  getPathWithLocale: (route: string) => `#/us/${route}`,
  goTo: (route: string) => window.history.pushState({}, route, route),
  setLoginHandler: (value: any) => value,
};
