import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductStyles } from "../../../styles/Products";



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
    <ProductStyles>
      <Link to={`/shop/${category ? category.category_name : null}/${id}`} className="anchor">
          <div className="product_container">
            <div className="product_img_container">
              <img src={product_image} alt="" />
            </div>
          <div>
            <h4>{product_name}</h4>
            <p>${price}</p>
          </div>
          </div>
      </Link>
    </ProductStyles>
  );
};
