import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LowerNavbar } from './lower_navbar/LowerNavbar'
import { SearchBar } from './search_bar/SearchBar'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Nav, TopNav } from '../styles/Navbar'

import logo from '../../assets/logo.png'

export const Navbar = () => {

  const { cart } = useSelector(state => state.cart)

  return (
    
      <Nav>
          <TopNav >

            <Link to="/" className='link'>
              <div className='logo'>
                <img src={logo} alt="" />
                
              </div>
            </Link>

            <SearchBar/>

            <div className='topnav_user_box'>
                {/* <Link to="/user/register" className='link'>
                  Create Account
                </Link> */}
                <Link to="/user/login" className='link'>
                  Login
                </Link>
                <Link to="/shop/cart" className='link cart_icon'>
                    <AiOutlineShoppingCart />
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
                </Link>
            </div>
            
            </TopNav>

          <LowerNavbar/>
      </Nav>

 
  )
}
