import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';
import { RiDeleteBinLine } from 'react-icons/ri'
import { useDispatch} from 'react-redux'
import { cartActions } from '../../redux/cart/cartSlice'
import { CartContainer, CartTable } from '../styles/Cart'
import { Button } from '../styles/Buttons'
import { Container } from '../styles/Container'
import axios from 'axios';
import {Payment} from './Payment';


let shippingTax = 5.99
const stripe_key=process.env.REACT_APP_STRIPE_KEY

export const Cart = () => {

    const [ stripeToken, setStripeToken ] = useState(null)
    const [openModal, setOpenModal] = React.useState(false);
    const {cart, total} = useSelector(state => state.cart)
    const {isLogged} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    

    const verifyLoggedUser = () => {
        if(isLogged){
            setOpenModal(true)
        }else{
            navigate('/user/login')
        }
    }

   
    const onToken = (token) => {
        setStripeToken(token)
    }

    // useEffect(() => {
    //     const makeStripeRequest = async() => {
    //         try {
    //             const res = await axios.post('http://localhost:3001/order/payment', {
    //                     tokenId:stripeToken.id,
    //                     amount:2000
    //                 })
    //                 console.log(res.data)
    //         }
    //         catch (error) {
    //                 console.log(error)
    //         }
    //     }

    //     stripeToken && makeStripeRequest()
    // }, [stripeToken])




 
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
                                <span className='product_price'><small>USD</small>{total}</span>
                            </div>
                            <div>
                                <h5>Shipping</h5>
                                <span className='product_price'><small>USD</small>{shippingTax}</span>
                            </div>
                            <div>
                                <h4>Total</h4>
                                <span className='product_price'><small>USD</small>{total + shippingTax}</span>
                            </div>
                                <Button 
                                    bgColor="#f5a131" 
                                    fontSize="1.1rem"
                                    onClick={() => verifyLoggedUser()}
                                >CHECKOUT</Button>
                                <Payment openModal={openModal} setOpenModal={setOpenModal}/>
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
