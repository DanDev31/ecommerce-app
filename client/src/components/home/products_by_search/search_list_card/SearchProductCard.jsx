import React from 'react'
import { Link } from 'react-router-dom'
import styles from './searchProductCard.modules.scss'

export const SearchProductCard = ({
    product_name,
    product_image,
    price
}) => {
  return (
    <Link to="">
        <div className={styles.latest_product_card_container}>
            <div className={styles.latest_product_card_image_container}>
                <img src={ product_image } alt="" />
            </div>
            <h3>{ product_name }</h3>
            <p>${ price }</p>
        </div>
    </Link>

  )
}
