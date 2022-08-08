import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchSearchedProduct } from '../../../../redux/products/searchBarSlice'
import { IoMdArrowDropright } from 'react-icons/io'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { FilterBar } from '../../../styles/Filter'
import { fetchSearchProductCopy } from '../../../../redux/products/searchProductCopy'



export const FilterSearchedProducts = ({active, setActive}) => {

    const [ openMenu, setOpenMenu ] = useState(false)
    const [ checkBoxValues, setCheckBoxValues ] = useState([])
    const dispatch = useDispatch()
    const searchedStorageValue = sessionStorage.getItem('searchValue')

    useEffect(()=>{
      dispatch(fetchSearchedProduct({search:searchedStorageValue, queriesArray:checkBoxValues}))
      dispatch(fetchSearchProductCopy(searchedStorageValue))
  },[dispatch, searchedStorageValue, checkBoxValues]) 
    
    const { searchProductsCopy } = useSelector(state => state.searchProductCopy)
    const brands = searchProductsCopy.map(product => product.brand) 
   
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
