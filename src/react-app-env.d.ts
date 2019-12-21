/// <reference types="react-scripts" />

declare module "jquery" {
  export = $;
}

declare module "knockout" {
  import * as knockout from "knockout";
  export = knockout;
}

declare module "pubsub" {
  import * as pubsub from "pubsub";
  export = pubsub;
}

declare module "notifier" {
  import * as knockout from "notifier";
  export = knockout;
}

declare module "ccConstants" {
  import * as knockout from "ccConstants";
  export = knockout;
}

declare module "ccRestClient" {
  import * as knockout from "ccRestClient";
  export = knockout;
}

declare module "ccLogger" {
  import * as knockout from "ccLogger";
  export = knockout;
}

declare module "pageLayout/product" {
  import * as knockout from "pageLayout/product";
  export = knockout;
}

declare module "*.less" {
  const content: any;
  export default content;
}

declare module "*.json" {
  const content: any;
  export default content;
}

declare var define: (any, any) => any;
