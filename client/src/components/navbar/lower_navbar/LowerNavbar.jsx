import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { fetchProductsByCategory } from '../../../redux/products/productsByCategorySlice'
import { fetchCategories } from '../../../redux/categories/categories'
import { fetchByBrand } from '../../../redux/products/filterBrandSlice'
import { LowerNav } from '../../styles/Navbar'




export const LowerNavbar = () => {

  const [ activeMenu, setActiveMenu ] = useState(false)

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
      
        <span className="span_floating_window" onMouseOver={handleShowMenu}>Categories
          
          <MdOutlineKeyboardArrowDown/>

            <div className={`floating_window ${activeMenu && "active"}`} onMouseLeave={handleHideMenu}>
              <div>
               
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
        
    </LowerNav>

  )
}
