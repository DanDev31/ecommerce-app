import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLatestProducts } from '../../../redux/products/latestProductsSlice'
import { LatestProductCard } from './LatestProductCard'
import { ProductsFlex } from '../../styles/Products'
import { Container } from '../../styles/Container'


export const LatestProducts = () => {

    const {latestProducts} = useSelector(state => state.latestProducts)
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(fetchLatestProducts())
    },[dispatch])

  return (
    <section>
        <Container>
            <h2 className='title_margin'>Latest Products</h2>

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
    </section>
  )
}
