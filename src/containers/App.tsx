import $ from "jquery";
import React from "react";

import { Provider } from "../context/RequireContext";
import { ProductCarousel } from "./ProductCarousel";

import { propsFactory } from "../mocks/Props";
import { topicFactory } from "../mocks/Topic";

$.Topic = topicFactory();

(ProductCarousel as any).whyDidYouRender = true;

export const App: React.FC = () => (
  <Provider value={propsFactory()}>
    <div className="container">
      <ProductCarousel />
    </div>
  </Provider>
);
