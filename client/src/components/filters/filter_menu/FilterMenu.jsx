import React, { useState } from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import styles from './filterMenu.module.scss'

export const FilterMenu = () => {

  const [ openMenu1, setOpenMenu1 ] = useState(false)
  const [ openMenu2, setOpenMenu2 ] = useState(false)


  const handleOpenMenu1 = () => {
    setOpenMenu1(!openMenu1)
  }

  const handleOpenMenu2 = () => {
    setOpenMenu2(!openMenu2)
  }

  return (
    <div className={styles.filter_menu_container}>
      <div className={styles.filter_menu_item}>
          <div className={styles.filter_menu_item_title} onClick={handleOpenMenu1}>
              <span>Categorias</span>
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
          <span>Marcas</span>
          <IoMdArrowDropright className={`${openMenu2 && styles.rotate}`}/>
        </div>
        <div className={`${styles.filter_dropdown_menu} ${openMenu2 && styles.active}`}>
            <input type="checkbox" />Corsair
            <input type="checkbox" />Redragon
            <input type="checkbox" />Samsung
          </div>
      </div>
    </div>
  )
}
