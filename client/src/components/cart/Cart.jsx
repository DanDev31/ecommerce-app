import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { CartItem } from './CartItem'

import styles from './cart.module.scss'


let shippingTax = 5.00

export const Cart = () => {

    const {cart} = useSelector(state => state.cart)
    let subTotal = cart.reduce((acum, current) => acum + (current.price * current.quantity), 0)
 
  return (
    <div className={styles.cart_container}>

        {
            cart && cart.length > 0 ?

            (
                <div className={styles.cart_products_container}>

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
                            <span>{subTotal}</span>
                        </div>
                        <div>
                            <h5>Shipping</h5>
                            <span>{shippingTax}</span>
                        </div>
                        <div>
                            <h4>Total</h4>
                            <span>{subTotal + shippingTax}</span>
                        </div>
                        <button>Checkout</button>
                    </div>

                </div>
            )

            :

            (   
                <div>
                    <p>Your cart is empty.</p>
                    <Link to='/shop'>
                        Go back to store
                    </Link>
                </div>
            )
        }

        
        
    </div>
  )
}
