import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./searchProductCard.modules.scss";

export const SearchProductCard = ({
  product_name,
  product_image,
  price,
  id,
  categoryId,
}) => {
  const { categories } = useSelector((state) => state.categories);

  const category = categories.find((e) => e.id === categoryId);
  return (
    <Link to={`/shop/${category.category_name}/${id}`}>
      <div className={styles.latest_product_card_container}>
        <div className={styles.latest_product_card_image_container}>
          <img src={product_image} alt="" />
        </div>
        <h3>{product_name}</h3>
        <p>${price}</p>
      </div>
    </Link>
  );
};
