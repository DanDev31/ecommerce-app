import React, { useState } from 'react'
import { SearchList } from './search_list/SearchList'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchedProduct } from '../../../redux/products/searchBarSlice'
import { FilterSearchedProducts } from './filter_search/FilterSearchedProducts'
import { HomeFlex } from '../../styles/Home'
import { Container } from '../../styles/Container'



export const ProductsBySearch = () => {

  const [active, setActive] = useState(false)
  const searchedStorageValue = sessionStorage.getItem('searchValue')
  const { searchedProducts } = useSelector((state) => state.searchBar);
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(fetchSearchedProduct({search:searchedStorageValue}))
  },[dispatch])
    
  return (
        <Container margin="6rem">
          <HomeFlex>
            {
              searchedProducts.length !== 0 ? 
              (
                <FilterSearchedProducts active={active} setActive={setActive}/>
              )
              :
              null
            }
              <SearchList />

          </HomeFlex>
        </Container>
  )
}
