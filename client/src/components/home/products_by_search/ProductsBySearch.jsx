import React from 'react'
import { FilterMenu } from '../../filters/filter_menu/FilterMenu'
import { Sort } from '../../filters/sort/Sort'
import { SearchList } from './search_list/SearchList'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSearchedProduct } from '../../../redux/products/searchBarSlice'
import { FilterSearchedProducts } from './filter_search/FilterSearchedProducts'

export const ProductsBySearch = () => {

  const searchedStorageValue = sessionStorage.getItem('searchValue')

  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(fetchSearchedProduct({search:searchedStorageValue}))
  },[dispatch])
    
  return (
    <main className="">
        <aside className="">
            <FilterSearchedProducts />
        </aside>

        <section className="">
            <h2>Results for: {searchedStorageValue}</h2>

            <div>
              <SearchList />
            </div>

        </section>

    </main>
  )
}
