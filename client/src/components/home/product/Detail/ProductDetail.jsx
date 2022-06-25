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
  let [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  function onCountEdit(event) {
    let countContent = Number(event.target.textContent);
    if (Number.isNaN(countContent)) setCount(Math.floor(Math.random() * 10));
    else setCount(countContent);
  }

  let relationsProduct = productsByCategory.filter(
    (e) => e.id !== parseInt(id)
  );
  return (
    <>
      {productDetail && (
        <div className={styles.cardContainer}>
          <div className={styles.latest_products_grid_container}>
            <div className={styles.latest_product_card_image_container}>
              <img
                alt={productDetail.product_name}
                src={productDetail.product_image}
              />
            </div>
            <div>
              <div>
              <h3>{productDetail.product_name}</h3>
              </div>
              <div>
              <h3>${productDetail.price}</h3>
                </div>
              <p>Rate: {productDetail.rate}</p>
              <p>Reviews: {productDetail.num_reviews}</p>
              <span>Stock: {productDetail.stock}</span>
              <div className="count-wrapper">
                <button onClick={decrease} disabled={count===0}>
                  -
                </button>
                <span className="count" onBlur={onCountEdit}>
                  {count}
                </span>
                <button
                  onClick={increase}
                  disabled={count === productDetail.stock}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <h4>Description</h4>
          <p>{productDetail.description}</p>
        </div>
      )}
      <div className={styles.relatedProduct}>
      <h4>Related Products</h4>

      <div className={styles.latest_products_grid_container}>
        {relationsProduct.length > 0 ? (
          relationsProduct.map((product, i) => <Product key={i} {...product} />)
          ) : (
          <p>There's no results</p>
        )}
      </div>
      </div>
    </>
  );
};
