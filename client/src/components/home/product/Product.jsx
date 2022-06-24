import React from "react";
import { Link } from "react-router-dom";
import styles from "./product.module.scss";

export const Product = ({ product_name, product_image, price ,id}) => {
  return (
    <div className={styles.latest_product_card_container}>
      <Link to={`/shop/${id}`}>
        <div className={styles.latest_product_card_image_container}>
          <img src={product_image} alt="" />
        </div>
        <h3>{product_name}</h3>
      </Link>
      <p>${price}</p>
    </div>
  );
};
