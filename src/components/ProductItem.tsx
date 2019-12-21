import React from "react";
import { classNames } from "../helpers/classNames";

import style from "../styles/ProductItem.module.less";

export const ProductItem = ({ product, ...props }: any) => {
  const { mediumImageURLs, displayName, description, listPrice, x_linea, x_skuNewLabelFlag, parentProducts } = product;
  const xlinea = x_linea || parentProducts?.[0]?.x_linea;
  return (
    <div className={classNames("product", "slick-slide", "slick-active", style.product)} aria-hidden="false">
      <a className="anchor" href="#/best-seller">
        <div className="cc-item-labels">
          {/*<img data-bind="attr : { src : x_partnerLogo}" className="cc-item-label" />*/}
          {x_skuNewLabelFlag && (
            <div className="cc-item-label label-new">
              <span> New </span>
            </div>
          )}
        </div>

        <div className="product__img">
          {/*style="max-width: 100%; min-height: 0px; height: 100%;"*/}
          <div id="cc_img__resize_wrapper">
            <img
              className="img-responsive center-block productshow-img"
              src={mediumImageURLs?.[0]?.toString() || parentProducts?.[0]?.mediumImageURLs?.[0]?.toString()}
              alt={displayName}
              title={description}
            />
          </div>
        </div>

        {xlinea && (
          <div className="product__line-img">
            <img src={`/file/general/${xlinea}.png`} alt={xlinea} />
          </div>
        )}
        {displayName && (
          <div className="product__title" data-bind="text : displayName">
            {displayName}
          </div>
        )}
        <div className="product__price">€ {listPrice}</div>
      </a>
    </div>
  );
};

export default ProductItem;
