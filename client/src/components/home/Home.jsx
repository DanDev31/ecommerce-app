import React from 'react'
import { FilterMenu } from '../filters/filter_menu/FilterMenu'
import { Sort } from '../filters/sort/Sort'
import { ProductList } from './product_list/ProductList'

export const Home = () => {

  
  return (
    <main>
        <aside>
            <FilterMenu />
        </aside>

        <section>
            <h2>Item Name</h2>
            <Sort />

            <div>
                <ProductList />
            </div>

        </section>

    </main>
  )
}
