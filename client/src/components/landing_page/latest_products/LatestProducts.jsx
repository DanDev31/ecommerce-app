import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLatestProducts } from '../../../redux/products/latestProductsSlice'
import { LatestProductCard } from './LatestProductCard'

import styles from './latest_products.module.scss'

export const LatestProducts = () => {

    const {latestProducts} = useSelector(state => state.latestProducts)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchLatestProducts())
    },[dispatch])

  return (
    <section className="container">
        <div className={ styles.latest_products_container }>
            <h2>Latest Products</h2>

            <div className={styles.latest_products_grid_container}>
                {
                    latestProducts.length > 0 ?
                    latestProducts.map((product, i) =>(
                        <LatestProductCard
                            key={i}
                            {...product}
                        />
                    ))
                    :
                    <p></p>
                }
            </div>
        </div>
    </section>
  )
}
