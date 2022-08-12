import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductStyles } from "../../styles/Products"; 
import { CircularProgress } from '@mui/material'; 

export const Product = ({
  product_name,
  product_image,
  price,
  id,
  categoryId,
}) => {



  const [ loading, setLoading ] = useState(true)
  const { categories } = useSelector(state => state.categories);
  const category = categories.find((e) => e.id === categoryId);


  useEffect(() => {
    if(category){
      setLoading(false)
    }
    
  },[loading])

  return (
  
    <ProductStyles>
        {
          loading ? 
          (
            <CircularProgress />
          )
          :
          (  
            <Link to={`/shop/${category ? category.category_name : null}/${id}`} className="anchor">
              <div className="product_container">
                <div className="product_img_container">
                  <img src={product_image} alt={product_name} />
                </div>
                <div>
                  <h4>{product_name}</h4>
                  <p>${price}</p>
                </div>
              </div>
            </Link>
          )
          }
  
      </ProductStyles>
  
  );
};
