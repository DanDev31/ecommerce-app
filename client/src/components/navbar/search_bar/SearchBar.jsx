import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { GoSearch } from 'react-icons/go'
import { fetchSearchedProduct } from '../../../redux/products/searchBarSlice'


import styles from './search_bar.module.scss'
import { useNavigate } from 'react-router-dom'
import { fetchSearchProductCopy } from '../../../redux/products/searchProductCopy'


export const SearchBar = () => {

  const [ search, setSearch ] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
 

  const handleChange = ({ target }) => {
    setSearch(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchSearchedProduct({search}))
    dispatch(fetchSearchProductCopy(search))
    setSearch('')
    sessionStorage.setItem('searchValue', search)
    navigate('/shop/searched_products')
  }

  return (
    <div className={ styles.search_bar_container }>
        <form className={ styles.search_bar_form } onSubmit={ handleSubmit }>
            <input type="text" value={ search } placeholder="Search products..." onChange={ handleChange }/>
            <button type='submit'><GoSearch/></button>
        </form>
    </div>
  )
}
