import React from 'react'
import { SearchList } from './search_list/SearchList'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSearchedProduct } from '../../../redux/products/searchBarSlice'
import { FilterSearchedProducts } from './filter_search/FilterSearchedProducts'
import { HomeFlex } from '../../styles/Home'



export const ProductsBySearch = () => {

  const searchedStorageValue = sessionStorage.getItem('searchValue')

  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(fetchSearchedProduct({search:searchedStorageValue}))
  },[dispatch])
    
  return (
    <HomeFlex>
        <FilterSearchedProducts />
        <section className="">
            <h2>Results for: {searchedStorageValue}</h2>
            <SearchList />
        </section>

    </HomeFlex>
  )
}
