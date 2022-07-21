import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LowerNavbar } from './lower_navbar/LowerNavbar'
import { SearchBar } from './search_bar/SearchBar'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'


export const Navbar = () => {

  const { cart } = useSelector(state => state.cart)

  return (
    <nav className="">
      <div className="">
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
                <div className="">
                  <AiOutlineShoppingCart className=""/>
                  {
                    cart.length === 0 ?
                    (
                      null
                    )
                    :
                    (
                      <span>{cart.length}</span>
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
