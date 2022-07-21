import React from 'react'
import { FilterMenu } from '../filters/filter_menu/FilterMenu'
import { Sort } from '../filters/sort/Sort'
import { ProductList } from './product_list/ProductList'


export const Home = () => {

  return (
    <main className="">
        <aside className="">
            <FilterMenu />
        </aside>

        <section className="">

            <div>
              <ProductList />
            </div>

        </section>

    </main>
  )
}
