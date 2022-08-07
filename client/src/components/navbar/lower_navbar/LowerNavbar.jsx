import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProductsByCategory } from '../../../redux/products/productsByCategorySlice'
import { fetchCategories } from '../../../redux/categories/categories'
import { fetchByBrand } from '../../../redux/products/filterBrandSlice'
import { LowerNav } from '../../styles/Navbar'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'



export const LowerNavbar = () => {

  const [ activeMenu, setActiveMenu ] = useState(false)
  const [ activeMobileMenu, setActiveMobileMenu ] = useState(false)
  const dropdownRef = useRef()
  
  const savedCategory = localStorage.getItem('category')
  const dispatch = useDispatch()

  useEffect(() => {
    const closeDropdown = (e) => {
      if(e.path[0] !== dropdownRef.current){
        setActiveMenu(false)
      }
    }
      document.body.addEventListener('click', closeDropdown)
    return () => {
      document.body.removeEventListener('click', closeDropdown)
    }
  },[])

  
  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchByBrand(savedCategory))
    dispatch(fetchProductsByCategory({savedCategory}))
  },[dispatch, savedCategory])


const handleValue = ({ target }) => {
  localStorage.setItem('category', target.innerText)
}



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
            <span  ref={dropdownRef} className="span_floating_window" onClick={() => setActiveMenu(!activeMenu)}>Categories
                
                <div className={`floating_window ${activeMenu && "active"}`}>
                  <div>
                  
                      <Link to="/shop" onClick={(e) => handleValue(e)} className='link'><span>PC Gamers</span></Link>
                    
                      <Link to="/shop" onClick={(e) => handleValue(e)} className='link'><span>Ram Memory</span></Link>
                    
                      <Link to="/shop" onClick={(e) => handleValue(e)} className='link'><span>Hard Disks and SSD</span></Link>
                  
                      <Link to="/shop" onClick={(e) => handleValue(e)} className='link'><span>CPU</span></Link>
                    
                      <Link to="/shop" onClick={(e) => handleValue(e)} className='link'><span>GPU</span></Link>
                  
                      <Link to="/shop" onClick={(e) => handleValue(e)} className='link'><span>Motherboards</span></Link>
                    
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
