import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'

import styles from './cart.module.scss'
import { useState } from 'react'

export const Cart = () => {

    const [productTotal, setProductTotal] = useState(0)
    const [totalOrder, setTotalOrder] = useState(0)

    const { cart } = useSelector(state => state.cart)
    const savedCart = JSON.parse(localStorage.getItem('cart'))

  return (
    <div className={styles.cart_container}>

        {
            cart && cart.length > 0 ?

            (
                <div className={styles.cart_products_container_}>

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
                            {
                                cart.map((product, i) => (

                                    <CartItem 
                                        key={i}
                                        productTotal={productTotal}
                                        setProductTotal={setProductTotal}
                                        {...product}
                                    />
                                ))
                            }
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

            :

            (
                <p>Your cart is empty.</p>
            )
        }

        
        
    </div>
  )
}
