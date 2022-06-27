import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchByBrand } from '../../../redux/products/filterBrandSlice'
import { IoMdArrowDropright } from 'react-icons/io'

import styles from './filterMenu.module.scss'
import { fetchProductsByCategory } from '../../../redux/products/productsByCategorySlice'

export const FilterMenu = () => {

  const [ openMenu1, setOpenMenu1 ] = useState(false)
  const [ openMenu2, setOpenMenu2 ] = useState(false)
  const [ checkBoxValues, setCheckBoxValues ] = useState([])
  const dispatch = useDispatch()
  const savedCategory = localStorage.getItem('category')

  const { productsByBrand } = useSelector(state => state.fitlerByBrand)
  const brands = productsByBrand.map(product => product.brand)

 

  let filteredBrands = []
  for (let i = 0; i < brands.length; i++) {
    
    if(!filteredBrands.includes(brands[i])){
      filteredBrands.push(brands[i])
    }
    
  }


  const handleOpenMenu1 = () => {
    setOpenMenu1(!openMenu1)
  }

  const handleOpenMenu2 = () => {
    setOpenMenu2(!openMenu2)
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
    
      dispatch(fetchProductsByCategory({savedCategory, queriesArray:checkBoxValues}))
      dispatch(fetchByBrand(savedCategory))
 
  },[dispatch, checkBoxValues]) 




  return (
    <div className={styles.filter_menu_container}>
      <div className={styles.filter_menu_item}>
          <div className={styles.filter_menu_item_title} onClick={handleOpenMenu1}>
              <h4>Categorias</h4>
              <IoMdArrowDropright  className={`${openMenu1 && styles.rotate}`}/>
          </div>
          <div className={`${styles.filter_dropdown_menu} ${openMenu1 && styles.active}`}>
            <span>Pc Gamers</span>
            <span>Ram Memory</span>
            <span>Hard Disks && SSD</span>
          </div>
      </div>
      <div className={styles.filter_menu_item}>
        <div className={styles.filter_menu_item_title} onClick={handleOpenMenu2}>
          <h4>Marcas</h4>
          <IoMdArrowDropright className={`${openMenu2 && styles.rotate}`}/>
        </div>
        <div className={`${styles.filter_dropdown_menu} ${openMenu2 && styles.active}`}>
          {
            filteredBrands.map((brand, i) => (
              <div className={styles.filter_dropdown_menu_item} key={i}>
                <label>{brand}</label>
                <input type="checkbox" value={`${brand}`} onChange={handleCheckBoxChange}/>
              </div>
            ))
          }
          
            
          </div>
      </div>
    </div>
  )
}
