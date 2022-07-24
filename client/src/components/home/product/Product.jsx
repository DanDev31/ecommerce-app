import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductStyles } from "../../styles/Products";  

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
    <ProductStyles>
      <Link to={`/shop/${category.category_name}/${id}`} className="anchor">
        <div className="image_container">
          <img src={product_image} alt={product_name} />
        </div>
        <h4>{product_name}</h4>
      <p>${price}</p>
      </Link>
    </ProductStyles>
  
  );
};
