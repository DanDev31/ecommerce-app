import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchSearchedProduct } from '../../../../redux/products/searchBarSlice'
import { IoMdArrowDropright } from 'react-icons/io'
import { FilterBar } from '../../../styles/Filter'
import { fetchSearchProductCopy } from '../../../../redux/products/searchProductCopy'



export const FilterSearchedProducts = () => {

    const [ openMenu1, setOpenMenu1 ] = useState(false)
    const [ openMenu2, setOpenMenu2 ] = useState(false)
    const [ checkBoxValues, setCheckBoxValues ] = useState([])
    const dispatch = useDispatch()
    
    const { searchProductsCopy } = useSelector(state => state.searchProductCopy)
    const searchedStorageValue = sessionStorage.getItem('searchValue')
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
  
    useEffect(()=>{
        dispatch(fetchSearchedProduct({search:searchedStorageValue, queriesArray:checkBoxValues}))
        dispatch(fetchSearchProductCopy(searchedStorageValue))
    },[dispatch, searchedStorageValue, checkBoxValues]) 

  return (
    <FilterBar>
      <div className="filter_menu_item">
          <div onClick={() => setOpenMenu1(!openMenu1)}>
              <h4>Categorias</h4>
              <IoMdArrowDropright  className={`${openMenu1 && "rotate"}`}/>
          </div>
          <div className={`filter_dropdown_menu ${openMenu1 && "active"}`}>
            <span>Pc Gamers</span>
            <span>Ram Memory</span>
            <span>Hard Disks && SSD</span>
          </div>
      </div>
      <div className="filter_menu_item">
        <div onClick={() => setOpenMenu2(!openMenu2)}>
          <h4>Marcas</h4>
          <IoMdArrowDropright  className={`${openMenu2 && "rotate"}`}/>
        </div>
        <div className={`filter_dropdown_menu ${openMenu2 && "active"}`}>
            {
              filteredBrands.map((brand, i) => (
                <div className="" key={i}>
                  <label>{brand}</label>
                  <input type="checkbox" value={`${brand}`} onChange={handleCheckBoxChange}/>
                </div>
              ))
            }  
          </div>
      </div>
    </FilterBar>
  )
}
