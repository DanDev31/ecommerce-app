import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LowerNavbar } from './lower_navbar/LowerNavbar'
import { SearchBar } from './search_bar/SearchBar'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Nav } from '../styles/Navbar'


export const Navbar = () => {

  const { cart } = useSelector(state => state.cart)

  return (
    <nav>
      <Nav>
          <Link to="/" className='link'>
            Logo
          </Link>

          <SearchBar/>

          <div>
              <Link to="" className='link'>
                Create Account
              </Link>
              <Link to="" className='link'>
                Login
              </Link>
              <Link to="/shop/cart" className='link'>
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
      </Nav>

      <LowerNavbar/>
        
    </nav>
  )
}
