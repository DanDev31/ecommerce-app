import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartActions } from "../../../../redux/cart/cartSlice";
import { fetchProductDetail } from "../../../../redux/products/productDetail";
import { Product } from "../Product";
import { ProductDetailStyle } from "../../../styles/ProductDetail";
import { Container } from "../../../styles/Container";


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
    <Container>
      {productDetail && (
        <div>
          <ProductDetailStyle>
              <div className="">
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
                  <button
                    className=""
                    // disabled={count === 0}
                    onClick={() => dispatch(cartActions.addProduct(productDetail))}
                  >Add to Cart</button>
              </div>
            </ProductDetailStyle>
      
              <div className="mb_3">
                  <h4 className="mb_1">Description</h4>
                  <p>{productDetail.description}</p>
                  <p>Reviews: {productDetail.num_reviews}</p>
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
    </Container>
  );
};
