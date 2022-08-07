import React, { useState } from 'react'
import { FilterMenu } from '../filters/filter_menu/FilterMenu'
import { ProductList } from './product_list/ProductList'
import { HomeFlex } from '../styles/Home'
import { Container } from '../styles/Container'

export const Home = () => {

  const [active, setActive] = useState(false)
 
  return (
    <Container margin="6rem">
      <HomeFlex>
          
          <FilterMenu active={active} setActive={setActive}/>
          <ProductList />
      
      </HomeFlex>
    </Container>
  )
}
