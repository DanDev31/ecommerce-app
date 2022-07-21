import React from 'react'
import { useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { CartItem } from './CartItem'


let shippingTax = 5.00

export const Cart = () => {

    const {cart} = useSelector(state => state.cart)
    const {isLogged} = useSelector(state => state.user)
    const navigate = useNavigate()
    let subTotal = cart.reduce((acum, current) => acum + (current.price * current.quantity), 0)

    const verifyLoggedUser = () => {
        if(isLogged){
            navigate('/shop/cart/order')
        }else{
            navigate('/user/login')
        }
    }
 
  return (
    <div className="">

        {
            cart && cart.length > 0 ?

            (
                <div className="">

                    <div>
                        <h2>Your Products</h2>
                        <div className="">
                            <span>Product Details</span>
                            <span>Price</span>
                            <span>Quantity</span>
                            <span>Delete</span>
                            <span>Total</span>
                        </div>
                        <div className="">
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
                    <div className="">
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
                        <button onClick={verifyLoggedUser}>Checkout</button>
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
