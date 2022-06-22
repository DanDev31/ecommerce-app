import React from 'react'
import { FilterMenu } from '../filters/filter_menu/FilterMenu'
import { Sort } from '../filters/sort/Sort'

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
                
            </div>

        </section>

    </main>
  )
}
