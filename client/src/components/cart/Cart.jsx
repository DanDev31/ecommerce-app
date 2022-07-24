import React from 'react'
import { useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useDispatch} from 'react-redux'
import { cartActions } from '../../redux/cart/cartSlice'
import { CartContainer, CartTable } from '../styles/Cart'
import { Button } from '../styles/Buttons'
import { Container } from '../styles/Container'



let shippingTax = 5.99

export const Cart = () => {

    const {cart} = useSelector(state => state.cart)
    const {isLogged} = useSelector(state => state.user)
    const dispatch = useDispatch()
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
    <Container>

        {
            cart && cart.length > 0 ?

            (
                <CartContainer>

                    <div className='products_container'>
                        <h3 className='mb_1'>Your Products</h3>
                        <hr />
                        
                        <div>

                            <CartTable>
                                <thead className="table_headers">
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Remove</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                { 
                                cart.map((product, i) => (
                                    <tr key={i}>
                                    <td>
                                        <div className='cart_item_details'>
                                            <div>
                                                <img src={product.product_image} alt="" />
                                            </div>
                                            <p>{product.product_name}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='quantity_buttons'>
                                            <button onClick={() => dispatch(cartActions.setSubstractQuantity(product.id))}>-</button>
                                            <span>{product.quantity}</span>
                                            <button onClick={() => dispatch(cartActions.setAddQuantity(product.id))}>+</button>
                                        </div>
                                    </td>
                                    <td>
                                    <RiDeleteBinLine 
                                        className="product_delete_button"
                                        onClick={() => dispatch(cartActions.deleteProduct(product.id))}
                                        />
                                    </td>
                                    <td>
                                        <span className='product_price'><small>USD</small>{product.price}</span>
                                    </td>
                                    
                                    </tr>
                                ))
                                }
                                </tbody>
                            </CartTable>

                        </div>
                    </div>
                    <div className='summary_container'>
                        <h3 className='mb_1'>Summary</h3>
                        <hr />
                        <div className='summary_inner_box'>

                            <div >
                                <h4>Subtotal</h4>
                                <span className='product_price'><small>USD</small>{subTotal}</span>
                            </div>
                            <div>
                                <h5>Shipping</h5>
                                <span className='product_price'><small>USD</small>{shippingTax}</span>
                            </div>
                            <div>
                                <h4>Total</h4>
                                <span className='product_price'><small>USD</small>{subTotal + shippingTax}</span>
                            </div>
                            <Button onClick={verifyLoggedUser} bgColor="#f5a131" fontSize="1.1rem">CHECKOUT</Button>

                        </div>
                    </div>

                </CartContainer>
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

        
        
    </Container>
  )
}
