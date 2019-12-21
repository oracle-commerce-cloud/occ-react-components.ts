///<reference path="../react-app-env.d.ts"/>
/* eslint import/no-unresolved: 0,  no-unused-vars:0, prefer-arrow-callback:0, no-undef: 0,  import/no-amd:0 */

import React from "react";
import ReactDOM from "react-dom";

import { ProductCarousel } from "../containers/ProductCarousel";
import { RequireWidgetContext } from "../context/RequireContext";
import { CCModel, CCProps } from "../types";

define([
  "knockout",
  "jquery",
  "pubsub",
  "notifier",
  "ccConstants",
  "ccRestClient",
  "ccLogger",
  "pageLayout/product",
  "navigation",
], function def(
  ko: any,
  $: any,
  pubsub: any,
  notifier: any,
  ccConstants: any,
  ccRestClient: any,
  logger: any,
  Product: any,
  navigation: any,
) {
  return {
    onRender(element: any, model: CCModel) {
      const ccProps: CCProps = {
        model,
        occDependencies: {
          ko,
          $,
          pubsub,
          notifier,
          ccConstants,
          ccRestClient,
          logger,
          Product,
          navigation,
        },
      };

      (function appContainerReady() {
        setTimeout(() => {
          if (element) {
            ReactDOM.render(<RequireWidgetContext {...ccProps} render={ProductCarousel} />, element);
          } else {
            appContainerReady();
          }
        }, 10);
      })();
    },
  };
});
