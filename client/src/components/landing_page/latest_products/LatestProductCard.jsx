import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductStyles } from "../../styles/Products"; 
import { CircularProgress } from '@mui/material'; 

export const LatestProductCard = ({ id, product_name, product_image, price, categoryId }) => {

  const { categories } = useSelector((state) => state.categories);
  const category = categories.find((e) => e.id === categoryId);
 
 
  return (
    <ProductStyles>
      {
        !categories || categories.length === 0  ? <CircularProgress />
        :
        (
          <>
            <Link to={`/shop/${category.category_name}/${id}`} className="anchor">
              <div className="image_container">
                <img src={product_image} alt="" />
              </div>
      
              <h4>{product_name}</h4>
            </Link>
            <p>${price}</p>
          </>
        )

      }
    </ProductStyles>
  );
};
