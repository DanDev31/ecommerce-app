import React from 'react'
import { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import styles from './search_bar.module.scss'

export const SearchBar = () => {

  const [ search, setSearch ] = useState('')

  const handleChange = ({ target }) => {
    setSearch(target.value)
  }

  console.log(search)
  return (
    <div className={ styles.search_bar_container }>
        <form className={ styles.search_bar_form }>
            <input type="text" value={ search } placeholder="Search products..." onChange={ handleChange }/>
            <button type='submit'><GoSearch/></button>
        </form>
    </div>
  )
}
