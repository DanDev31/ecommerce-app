import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchByBrand } from '../../../redux/products/filterBrandSlice'
import { fetchProductsByCategory } from '../../../redux/products/productsByCategorySlice'
import { IoMdArrowDropright } from 'react-icons/io'
import { FilterBar } from '../../styles/Filter'
import { MdOutlineArrowForwardIos } from 'react-icons/md'


export const FilterMenu = ({active, setActive}) => {


  const [ openMenu, setOpenMenu ] = useState(false)
  const [ checkBoxValues, setCheckBoxValues ] = useState([])
  const dispatch = useDispatch()
  const savedCategory = localStorage.getItem('category')


  useEffect(()=>{
    
      dispatch(fetchProductsByCategory({savedCategory, queriesArray:checkBoxValues}))
      dispatch(fetchByBrand(savedCategory))

  },[dispatch, savedCategory, checkBoxValues]) 
  
  const { productsByBrand } = useSelector(state => state.filterByBrand)
  if(!productsByBrand) return <p>Loading...</p>
  const brands = productsByBrand.map(product => product.brand)


  let filteredBrands = []
  for (let i = 0; i < brands.length; i++) {
    
    if(!filteredBrands.includes(brands[i])){
      filteredBrands.push(brands[i])
    }
    
  }

  const handleCheckBoxChange = (e) => {
    let checkBoxObject = {
      brandValue: e.target.value,
      isCheck:e.target.checked
    }

    let hasValue = checkBoxValues.find(element => element.brandValue === e.target.value)
  

    if(hasValue){
      let index = checkBoxValues.indexOf(hasValue)
      if(index !== -1){
        checkBoxValues[index] = checkBoxObject
        setCheckBoxValues([...checkBoxValues])
      }
    }else{
      setCheckBoxValues([...checkBoxValues, checkBoxObject])
    }

  }



  return (
   
      <FilterBar active={active}>
        <div>
          <div className="filter_menu_item">
              <div onClick={() => setOpenMenu(!openMenu)}>
                <h4>Brands</h4>
                <IoMdArrowDropright  className={`filter_menu_item_arrow ${openMenu && "rotate"}`}/>
              </div>
            <div className={`filter_dropdown_menu ${openMenu && "active"}`}>
                {
                  filteredBrands.map((brand, i) => (
                    <div className="filter_name_item" key={i}>
                      <label>{brand}</label>
                      <input type="checkbox" value={`${brand}`} onChange={handleCheckBoxChange}/>
                    </div>
                  ))
                }  
              </div>
          </div>

        </div>
        <div className='arrow_filter_container'>
          <MdOutlineArrowForwardIos className={`close_filter_menu_icon ${active && 'rotate_180'}`} onClick={() => setActive(!active)}/>
        </div>
      </FilterBar>
  
  )
}
