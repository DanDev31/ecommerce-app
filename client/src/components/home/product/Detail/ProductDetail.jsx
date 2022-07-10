import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartActions } from "../../../../redux/cart/cartSlice";
import { fetchProductDetail } from "../../../../redux/products/productDetail";
import { Product } from "../Product";

import styles from "./productDetail.module.scss";


export const ProductDetail = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const { productDetail } = useSelector((state) => state.productDetail);
  const { productsByCategory } = useSelector(
    (state) => state.productsByCategory
  );

  useEffect(() => {
    dispatch(fetchProductDetail(id));
  }, [dispatch, id]);

  let [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function onCountEdit(event) {
    let countContent = Number(event.target.textContent);
    if (Number.isNaN(countContent)) setCount(countContent);
    else setCount(countContent);
  }

  let relationsProduct = productsByCategory.filter(
    (e) => e.id !== parseInt(id)
  );

  const handleAddProduct = () => {
    dispatch(cartActions.addProduct(productDetail))
  }

  return (
    <>
      {productDetail && (
        <div>
          <div className={styles.cardContainer}>
        <div className={styles.latest_product_card_image_container}>
              <img
                alt={productDetail.product_name}
                src={productDetail.product_image}
              />
            </div>
            <div className={styles.text}>
              <div>
                <h3>{productDetail.product_name}</h3>
              </div>
              <div>
                <h3>${productDetail.price}</h3>
              </div>
              <p>Rate: {productDetail.rate}</p>
              <div className={styles.stocks}>
                {productDetail.stock > 3 ? (
                  <span className={styles.stock}>
                    {productDetail.stock} Available
                  </span>
                ) : (
                  <span className={styles.stock1}>
                    {productDetail.stock} Available
                  </span>
                )}
              </div>
              <div className={styles.count_wrapper}>
                <button onClick={decrease} disabled={count === 0}>
                  -
                </button>
                <span className={styles.count} onBlur={onCountEdit}>
                  {count}
                </span>
                <button
                  onClick={increase}
                  disabled={count === productDetail.stock}
                >
                  +
                </button>
              </div>
              <button
                className={styles.buttonCart}
                disabled={count === 0}
                onClick={() => handleAddProduct()}
              >Add to Cart</button>
                    </div>
                    <div>
          <h4>Description</h4>
          <p>{productDetail.description}</p>
          <p>Reviews: {productDetail.num_reviews}</p>
          </div>
        </div>
      
          </div>
      )}
  
  
<div className={styles.related}>
      <h4>Related Products</h4>
      <div className={styles.latest_products_grid_container}>
  
          {relationsProduct.length > 0 ? (
            relationsProduct.map((product, i) => (
              <Product key={i} {...product} />
            ))
          ) : (
            <p>There's no results</p>
          )}
        
      </div>
      </div>
    </>
  );
};
