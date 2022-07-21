import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LowerNavbar } from './lower_navbar/LowerNavbar'
import { SearchBar } from './search_bar/SearchBar'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import styles from './navbar.module.scss'

export const Navbar = () => {

  const { cartLength } = useSelector(state => state.cart)

  return (
    <nav className={ styles.navbar }>
      <div className={ styles.top_navbar }>
        <div>
              <span>Logo</span>
          </div>

          <SearchBar/>

          <div>
              <Link to="">
                  <span>Create Account</span>
              </Link>
              <Link to="">
                  <span>Login</span>
              </Link>
              <Link to="/shop/cart">
                <div className={styles.cart_icon_container}>
                  <AiOutlineShoppingCart className={styles.cart_icon}/>
                  {
                    cartLength === 0 && !cartLength ?
                    (
                      null
                    )
                    :
                    (
                      <span>{cartLength}</span>
                    )
                  }
                </div>
              </Link>
          </div>
      </div>

      <LowerNavbar/>
        
    </nav>
  )
}
