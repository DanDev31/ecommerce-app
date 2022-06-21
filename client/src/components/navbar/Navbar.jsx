import React from 'react'
import { Link } from 'react-router-dom'
import { LowerNavbar } from './lower_navbar/LowerNavbar'
import { SearchBar } from './search_bar/SearchBar'

import styles from './navbar.module.scss'

export const Navbar = () => {
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
          </div>
      </div>

      <LowerNavbar/>
        
    </nav>
  )
}
