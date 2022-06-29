import React from 'react'
import { FilterMenu } from '../../filters/filter_menu/FilterMenu'
import { Sort } from '../../filters/sort/Sort'
import { SearchList } from './search_list/SearchList'

import styles from './productsBySearch.module.scss'
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
    <main className={styles.home_container}>
        <aside className={styles.home_filter_sidebar}>
            <FilterSearchedProducts />
        </aside>

        <section className={styles.home_products_section}>
            <h2>Results for: {searchedStorageValue}</h2>

            <div>
              <SearchList />
            </div>

        </section>

    </main>
  )
}
