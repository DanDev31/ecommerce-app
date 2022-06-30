import React from 'react'
import { CartItem } from './CartItem'

import styles from './cart.module.scss'

export const Cart = () => {
  return (
    <div className={styles.cart_container}>
        <div>
            <h2>Your Products</h2>
            <div className={styles.titles_container}>
                <span>Product Details</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Delete</span>
                <span>Total</span>
            </div>
            <div className={styles.products_container}>
                <CartItem />
            </div>
        </div>
        <div className={styles.summary_container}>
            <h3>Summary</h3>
            <hr />
            <div>
                <h4>Subtotal</h4>
                <span>2.00</span>
            </div>
            <div>
                <h5>Shipping</h5>
                <span>1.00</span>
            </div>
            <div>
                <h4>Total</h4>
                <span>3.00</span>
            </div>
            <button>Checkout</button>
        </div>
    </div>
  )
}
