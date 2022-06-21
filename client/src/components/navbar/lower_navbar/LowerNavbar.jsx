import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import styles from './lowerNavbar.module.scss'
import { useState } from 'react'

export const LowerNavbar = () => {

  const [ active, setActive ] = useState(false)

  const handleToggle = () =>{
    setActive(!active)
  }

  console.log(active)
  return (
    <div className={ styles.lower_navbar }>
      
        <span className={styles.lower_navbar_span} onMouseOver={handleToggle} onMouseLeave={handleToggle}>Categories
          
          <MdOutlineKeyboardArrowDown/>

            <div className={`${styles.lower_navbar_floating_window} ${active && styles.active}`}>
              <ul className={styles.floating_window_nav}>
                <li>
                  <Link to="">PC Gamers</Link>
                </li>
                <li>
                  <Link to="">Ram Memory</Link>
                </li>
                <li>
                  <Link to="">Hard Disk & SSD</Link>
                </li>
                <li>
                  <Link to="">CPU</Link>
                </li>
                <li>
                  <Link to="">Power Supply</Link>
                </li>
                <li>
                  <Link to="">Accesories</Link>
                </li>
              </ul>
            </div>

        </span>
        <span>About</span>
        <span>Contact Us</span>
        
    </div>

  )
}
