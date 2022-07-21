import React from 'react'
import { CarouselLandingPage } from './carousel/Carousel'
import { LatestProducts } from './latest_products/LatestProducts'


export const LandingPage = () => {
  return (
    <div>
        <CarouselLandingPage/>
        <LatestProducts />
    </div>
  )
}
