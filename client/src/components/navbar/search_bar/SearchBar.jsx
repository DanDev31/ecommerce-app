import React from 'react'
import { GoSearch } from 'react-icons/go'
import styles from './search_bar.module.scss'

export const SearchBar = () => {

  

  return (
    <div className={ styles.search_bar_container }>
        <form className={ styles.search_bar_form }>
            <input type="text" placeholder="Search products..."/>
            <button type='submit'><GoSearch/></button>
        </form>
    </div>
  )
}
