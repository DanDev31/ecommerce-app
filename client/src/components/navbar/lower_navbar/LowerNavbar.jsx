import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import styles from './lowerNavbar.module.scss'
import { fetchProductsByCategory } from '../../../redux/products/productsByCategorySlice'
import { fetchCategories } from '../../../redux/categories/categories'
import { fetchByBrand } from '../../../redux/products/filterBrandSlice'

export const LowerNavbar = () => {

  const [ active, setActive ] = useState(false)

  const handleShowMenu = () =>{
    setActive(true)
  }

  const handleHideMenu = () => {
    setActive(false)
  }

const handleValue = ({ target }) => {
  localStorage.setItem('category', target.innerText)
}

const savedCategory = localStorage.getItem('category')
const dispatch = useDispatch()


useEffect(() => {
  dispatch(fetchCategories())
  dispatch(fetchByBrand(savedCategory))
  dispatch(fetchProductsByCategory({savedCategory}))
},[dispatch, savedCategory])



  return (
    <div className={ styles.lower_navbar }>
      
        <span className={styles.lower_navbar_span} onMouseOver={handleShowMenu}>Categories
          
          <MdOutlineKeyboardArrowDown/>

            <div className={`${styles.lower_navbar_floating_window} ${active && styles.active}`} onMouseLeave={handleHideMenu}>
              <div className={styles.floating_window_nav}>
               
                  <Link to="/shop" onClick={(e) => handleValue(e)}>PC Gamers</Link>
                
                  <Link to="/shop" onClick={(e) => handleValue(e)}>Ram Memory</Link>
                
                  <Link to="/shop" onClick={(e) => handleValue(e)}>Hard Disk & SSD</Link>
               
                  <Link to="/shop" onClick={(e) => handleValue(e)}>CPU</Link>
                
                  <Link to="/shop" onClick={(e) => handleValue(e)}>GPU</Link>
               
                  <Link to="/shop" onClick={(e) => handleValue(e)}>MotherBoards</Link>
                
                  <Link to="/shop" onClick={(e) => handleValue(e)}>Power Supply</Link>
               
                  <Link to="/shop" onClick={(e) => handleValue(e)}>Accesories</Link>
               
              </div>
            </div>

        </span>
        <span>About</span>
        <span>Contact Us</span>
        
    </div>

  )
}
