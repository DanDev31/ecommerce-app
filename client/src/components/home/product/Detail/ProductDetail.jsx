import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartActions } from "../../../../redux/cart/cartSlice";
import { fetchProductDetail } from "../../../../redux/products/productDetail";
import { Product } from "../Product";
import { ProductDetailStyle , RelatedProducts} from "../../../styles/ProductDetail";
import { Container } from "../../../styles/Container";
import { Button } from "../../../styles/Buttons";


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
              <div className="product_detail_img">
                <img
                  alt={productDetail.product_name}
                  src={productDetail.product_image}
                />
              </div>
              <div className="product_detail_info">
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
                  <Button
                    bgColor="#102a48" textColor="white" fontSize="1.8rem"
                    bshadow={true}
                    // disabled={count === 0}
                    onClick={() => dispatch(cartActions.addProduct(productDetail))}
                  >Add to Cart</Button>
              </div>
            </ProductDetailStyle>
      
              <div className="mb_3">
                  <h4 className="mb_1">Description</h4>
                  <p>{productDetail.description}</p>
                  <p>Reviews: {productDetail.num_reviews}</p>
              </div>
          </div>
      )}
  
  
<div >
      <h3 className="mb_2">Related Products</h3>
      <hr />
      <RelatedProducts>
  
          {relationsProduct.length > 0 ? (
            relationsProduct.map((product, i) => (
              <Product key={i} {...product} />
            ))
          ) : (
            <p>There's no results</p>
          )}
        
      </RelatedProducts>
      </div>
    </Container>
  );
};
