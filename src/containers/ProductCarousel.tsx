import React from "react";

import { fetchWithParams } from "../api/fetchWithParams";
import { ProductItem } from "../components/ProductItem";
import { useApi } from "../hooks/useApi";

import style from "../styles/ProductCarouselContainer.module.less";

const skuIdsParams = {
  skuIds: "731058,731313,731258,731063,731114,731100,731319,731288,731366,731666,731095,731093",
};

export const ProductCarousel = () => {
  const { data } = useApi(["/ccstoreui/v1/skus", skuIdsParams], fetchWithParams, { focusThrottleInterval: 300 * 1000 });
  const items = data?.items;

  return (
    <div className="carousel" id="KDProductCarouselV2_v0-wi500032">
      <div className={`container ${style.container}`}>
        <div className={`row ${style.questionRow}`}>
          <div className={`col-sm-12 ${style.questionCol} carousel-productshow`}>
            {items && items.map((product: any) => <ProductItem key={product.repositoryId} product={product} />)}
          </div>
        </div>
      </div>
    </div>
  );
};
