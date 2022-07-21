import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLatestProducts } from '../../../redux/products/latestProductsSlice'
import { LatestProductCard } from './LatestProductCard'



export const LatestProducts = () => {

    const {latestProducts} = useSelector(state => state.latestProducts)
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(fetchLatestProducts())
    },[dispatch])

  return (
    <section className="container">
        <div className="">
            <h2>Latest Products</h2>

            <div className="">
               
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
                
            </div>
        </div>
    </section>
  )
}
