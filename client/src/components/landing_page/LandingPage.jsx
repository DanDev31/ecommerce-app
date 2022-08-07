import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchLatestProducts } from '../../redux/products/latestProductsSlice'
import { CarouselLandingPage } from './carousel/Carousel'
import { LatestProducts } from './latest_products/LatestProducts'


export const LandingPage = () => {

  const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(fetchLatestProducts())
    },[dispatch])


  return (
    <div>
        <CarouselLandingPage />
        <LatestProducts />
    </div>
  )
}
