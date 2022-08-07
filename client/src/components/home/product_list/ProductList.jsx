import React from 'react'
import { useSelector } from 'react-redux'
import { Sort } from '../../filters/sort/Sort'
import { Product } from '../product/Product'
import { ProductsFlex } from '../../styles/Products'
import { Container } from '../../styles/Container'


export const ProductList = () => {
  
const { productsByCategory } = useSelector(state => state.productsByCategory)
const category = localStorage.getItem('category')

  if (!productsByCategory) return <p>Loading...</p>;

  return (
        <Container>
            <h2 className='mb_2'>{category}</h2>
            <Sort />
            <p style={{marginTop:"1rem"}}>Total results: {productsByCategory.length}</p>
            <ProductsFlex>
                {
                    productsByCategory.length > 0  ?
                    productsByCategory.map((product, i) =>(
                        <Product
                            key={i}
                            {...product}
                        />
                    ))
                    :
                    <p>There's no results</p>
                }
            </ProductsFlex>
        </Container>
  );
};
