import React from 'react'
import { useSelector } from 'react-redux'
import { Product } from '../product/Product'

import styles from './product_list.module.scss'

export const ProductList = () => {
  
  const { productsByCategory } = useSelector(state => state.productsByCategory)
  

  if(!productsByCategory) return <p>Loading...</p>

  return (
    <section>
        <div className={ styles.latest_products_container }>
            <h5>Total results: {productsByCategory.length}</h5>
            <div className={styles.latest_products_grid_container}>
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
            </div>
        </div>
    </section>
  )
}
