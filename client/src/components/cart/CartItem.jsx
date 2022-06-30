import React from 'react'

import styles from './cartItem.module.scss'

export const CartItem = () => {
  return (
    <div className={styles.product}>
        <div className={styles.product_image}>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.product_info}>
                        <h3>Title</h3>
                        <p>Description</p>
                    </div>
                    <div>
                        <span>2.00</span>
                    </div>
                    <div className={styles.quantity_buttons_container}>
                        <button>+</button>
                        <input type="number" />
                        <button>-</button>
                    </div>
                    <div className={styles.total}>
                        <span>2.00</span>
                    </div>
    </div>
  )
}
