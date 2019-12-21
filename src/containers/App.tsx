import $ from "jquery";
import React from "react";

import { RequireWidgetContext } from "../context/RequireContext";
import { ProductCarousel } from "./ProductCarousel";

import { occDependencies, model } from "../mocks/Props";
import { topicFactory } from "../mocks/Topic";

$.Topic = topicFactory();

(ProductCarousel as any).whyDidYouRender = true;

export const App: React.FC = () => (
  <RequireWidgetContext model={model} occDependencies={occDependencies} render={() => <ProductCarousel />} />
);
