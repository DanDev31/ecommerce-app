import React from 'react'
import { FilterMenu } from '../filters/filter_menu/FilterMenu'
import { Sort } from '../filters/sort/Sort'
import { ProductList } from './product_list/ProductList'

import styles from './home.module.scss'

export const Home = () => {

 
  
  return (
    <main className={styles.home_container}>
        <aside className={styles.home_filter_sidebar}>
            <FilterMenu />
        </aside>

        <section className={styles.home_products_section}>

            <div>
              <ProductList />
            </div>

        </section>

    </main>
  )
}
