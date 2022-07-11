import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { CartItem } from './CartItem'

import styles from './cart.module.scss'


let shippingTax = 5.00

export const Cart = () => {

    const { cart } = useSelector(state => state.cart)
    const { subTotal } = useSelector(state => state.cart)
    const savedCart = JSON.parse(localStorage.getItem('user_cart'))
    

  return (
    <div className={styles.cart_container}>

        {
            savedCart && savedCart.length > 0 ?

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
                                savedCart.map((product, i) => (

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
