import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartActions } from "../../../../redux/cart/cartSlice";
import { fetchProductDetail } from "../../../../redux/products/productDetail";
import { Product } from "../Product";


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


  let relationsProduct = productsByCategory.filter(
    (e) => e.id !== parseInt(id)
  );

  
  return (
    <>
      {productDetail && (
        <div>
          <div className="">
        <div className="">
              <img
                alt={productDetail.product_name}
                src={productDetail.product_image}
              />
            </div>
            <div className="">
              <div>
                <h3>{productDetail.product_name}</h3>
              </div>
              <div>
                <h3>${productDetail.price}</h3>
              </div>
              <p>Rate: {productDetail.rate}</p>
              <div className="">
                {productDetail.stock > 3 ? (
                  <span className="">
                    {productDetail.stock} Available
                  </span>
                ) : (
                  <span className="">
                    {productDetail.stock} Available
                  </span>
                )}
              </div>
              {/* <div className={count_wrapper}>
                <button onClick={decrease} disabled={count === 0}>
                  -
                </button>
                <span className={count} onBlur={onCountEdit}>
                  {count}
                </span>
                <button
                  onClick={increase}
                  disabled={count === productDetail.stock}
                >
                  +
                </button>
              </div> */}
              <button
                className=""
                // disabled={count === 0}
                onClick={() => dispatch(cartActions.addProduct(productDetail))}
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
  
  
<div className="">
      <h4>Related Products</h4>
      <div className="">
  
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
