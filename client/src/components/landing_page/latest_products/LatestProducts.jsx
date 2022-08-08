import React from 'react'
import { useSelector } from 'react-redux'
import { LatestProductCard } from './LatestProductCard'
import { ProductsFlex } from '../../styles/Products'
import { Container } from '../../styles/Container'


export const LatestProducts = () => {

    const {latestProducts} = useSelector(state => state.latestProducts)
   
  return (
        <Container>
            <h2 className='mb_3 text_align'>Latest Products</h2>

            <ProductsFlex>
               
                {
                    latestProducts.length > 0 || !latestProducts ?
                    latestProducts.map((product, i) =>(
                        
                        <LatestProductCard
                        key={i}
                        {...product}
                        
                        />
                    ))
                    :
                    <p>Loading...</p>
                }
                
            </ProductsFlex>
        </Container>
  
  )
}
