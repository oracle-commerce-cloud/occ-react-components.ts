import translate from "./Translate";
import user from "./User";
import site from "./Site";

export default {
  translate,
  id: () => "id",
  cart: () => "not implemented",
  user: () => user,
  site: () => site,
  locale: () => "en",
  category: () => "not implemented",
  supportedLocales: () => [],
  links: () => "not implemented",
  product() {
    return {
      id: () => "productId",
      displayName: () => "Product display name",
    };
  },
};
