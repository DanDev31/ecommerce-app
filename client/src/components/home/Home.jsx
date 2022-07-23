import React from 'react'
import { FilterMenu } from '../filters/filter_menu/FilterMenu'
import { ProductList } from './product_list/ProductList'
import { HomeFlex } from '../styles/Home'
import { Container } from '../styles/Global'

export const Home = () => {

  return (
    <Container>
      <HomeFlex>
          <aside className="">
              <FilterMenu />
          </aside>

          <section>

              <div>
                <ProductList />
              </div>

          </section>

      </HomeFlex>
    </Container>
  )
}
