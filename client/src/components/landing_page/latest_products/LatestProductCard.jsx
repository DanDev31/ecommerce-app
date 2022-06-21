import React from 'react'
import styles from './latest_product_card.module.scss'

export const LatestProductCard = ({
    product_name,
    product_image,
    price
}) => {
  return (
    <div className={styles.latest_product_card_container}>
        <div className={styles.latest_product_card_image_container}>
            <img src={ product_image } alt="" />
        </div>
        <h3>{ product_name }</h3>
        <p>${ price }</p>
    </div>
  )
}
