import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetail } from "../../../../redux/products/productDetail";
import { Product } from "../Product";
import styles from "./productDetail.module.scss";
export const ProductDetail = () => {
  const { productDetail } = useSelector((state) => state.productDetail);
  const { productsByCategory } = useSelector(
    (state) => state.productsByCategory
  );

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductDetail(id));
  }, [dispatch, id]);

  let relationsProduct = productsByCategory.filter(
    (e) => e.id !== parseInt(id)
  );
  return (
    <>
      {productDetail && (
        <>
          <div className={styles.latest_product_card_container}>
            <div className={styles.latest_product_card_image_container}>
              <img
                alt={productDetail.product_name}
                src={productDetail.product_image}
              />
            </div>
            <div>
              <h3>{productDetail.product_name}</h3>
              <p>Stock: {productDetail.stock}</p>
              <p>Price: ${productDetail.price}</p>
              <p>Rate: {productDetail.rate}</p>
              <p>Reviews: {productDetail.num_reviews}</p>
            </div>
          </div>
          <h4>Descriptions</h4>
          <p>{productDetail.description}</p>
        </>
      )}
      <h4>Related Products</h4>
      <div className={styles.latest_products_grid_container}>
        {relationsProduct.length > 0 ? (
          relationsProduct.map((product, i) => <Product key={i} {...product} />)
        ) : (
          <p>There's no results</p>
        )}
      </div>
    </>
  );
};
