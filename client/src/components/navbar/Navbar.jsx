import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LowerNavbar } from './lower_navbar/LowerNavbar'
import { SearchBar } from './search_bar/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Nav, TopNav } from '../styles/Navbar'

import logo from '../../assets/logo.png'
import { logout } from '../../redux/user/userSlice'

export const Navbar = () => {

  const [ showMenu, setShowMenu ] = useState(false)
  const { cart } = useSelector(state => state.cart)
  const { user } = useSelector(state => state.user)
  const { googleUser } = useSelector(state => state.user)
  const dispatch = useDispatch()


  return (
    
      <Nav>
          <TopNav>
            <Link to="/" className='link'>
              <div className='logo'>
                <img src={logo} alt="" />
                
              </div>
            </Link>

            <SearchBar />

            <div className='topnav_user_box'>
                
                {
                  user || googleUser ? 
                  (
                    <div className='profile_box'>
                      <p onClick={() => setShowMenu(!showMenu)}>{googleUser ? googleUser.displayName : user.name}</p>
                      <div className={`logout ${showMenu ? 'active' : ''}`}>
                        <p onClick={() => dispatch(logout())}>Logout</p>
                      </div>
                    </div>
                  )
                  :
                  (
                    <Link to="/user/login" className='link'>
                      Login
                    </Link>
                  )
                
                }
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
