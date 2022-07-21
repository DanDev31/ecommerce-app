import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Product = ({
  product_name,
  product_image,
  price,
  id,
  categoryId,
}) => {
  const { categories } = useSelector((state) => state.categories);

  const category = categories.find((e) => e.id === categoryId);

  return (
    <div className="">
      <Link to={`/shop/${category.category_name}/${id}`}>
        <div className="">
          <img src={product_image} alt={product_name} />
        </div>
        <h3>{product_name}</h3>
      </Link>
      <p>${price}</p>
    </div>
  );
};
