import React from "react";
import { Link } from "react-router-dom";
import styles from "./latest_product_card.module.scss";

export const LatestProductCard = ({ product_name, product_image, price }) => {
  return (
    <div className={styles.latest_product_card_container}>
      <Link to="">
        <div className={styles.latest_product_card_image_container}>
          <img src={product_image} alt="" />
        </div>

        <h3>{product_name}</h3>
      </Link>
      <p>${price}</p>
    </div>
  );
};
