import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { fetchProductsByCategory } from '../../../redux/products/productsByCategorySlice'
import { fetchCategories } from '../../../redux/categories/categories'
import { fetchByBrand } from '../../../redux/products/filterBrandSlice'
import { LowerNav } from '../../styles/Navbar'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'



export const LowerNavbar = () => {

  const [ activeMenu, setActiveMenu ] = useState(false)
  const [ activeMobileMenu, setActiveMobileMenu ] = useState(false)

  const handleShowMenu = () =>{
    setActiveMenu(true)
  }

  const handleHideMenu = () => {
    setActiveMenu(false)
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
      <LowerNav>
        {
          activeMobileMenu ? 
            <CgClose 
              className='mobile_menu_icon' 
              onClick={() => setActiveMobileMenu(!activeMobileMenu)}
            />
            :
            <GiHamburgerMenu 
              className='mobile_menu_icon' 
              onClick={() => setActiveMobileMenu(!activeMobileMenu)}
            />
        } 
          <div className={`lower_nav_menu ${activeMobileMenu && "active_mobile_menu"}`}>
            <span className="span_floating_window" onMouseOver={handleShowMenu}>Categories
              
              <MdOutlineKeyboardArrowDown/>

                <div className={`floating_window ${activeMenu && "active"}`} onMouseLeave={handleHideMenu}>
                  <div>
                  
                      <Link to="/shop" onClick={(e) => handleValue(e)} className='link'><span>PC Gamers</span></Link>
                    
                      <Link to="/shop" onClick={(e) => handleValue(e)} className='link'><span>Ram Memory</span></Link>
                    
                      <Link to="/shop" onClick={(e) => handleValue(e)} className='link'><span>Hard Disk & SSD</span></Link>
                  
                      <Link to="/shop" onClick={(e) => handleValue(e)} className='link'><span>CPU</span></Link>
                    
                      <Link to="/shop" onClick={(e) => handleValue(e)} className='link'><span>GPU</span></Link>
                  
                      <Link to="/shop" onClick={(e) => handleValue(e)} className='link'><span>MotherBoards</span></Link>
                    
                      <Link to="/shop" onClick={(e) => handleValue(e)} className='link'><span>Power Supply</span></Link>
                  
                      <Link to="/shop" onClick={(e) => handleValue(e)} className='link'><span>Accesories</span></Link>
                  </div>
                </div>

            </span>
            <span>About</span>
            <span>Contact Us</span>

          </div>
          
      </LowerNav>
  

  )
}
