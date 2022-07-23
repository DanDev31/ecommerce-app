import React from 'react'
import { useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { CartItem } from './CartItem'
import { CartContainer } from '../styles/Cart'
import { Container } from '../styles/Global'


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
    <Container>

        {
            cart && cart.length > 0 ?

            (
                <CartContainer>

                    <div className='products_container'>
                        <h3 className='mb_1'>Your Products</h3>
                        <hr />
                        
                        <div>
                            {/* {
                                cart.map((product, i) => (

                                    <CartItem 
                                        key={i}
                                        {...product}
                                    />
                                ))
                            } */}

                            {/*  */}

                            <table className="table">
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
          cart.map((company, i) => (
            <tr key={i}>
              <td>
                {company.name}
              </td>
              <td>
                {company.email}
              </td>
              <td>
                {company.active?'Enabled':'Disabled'}
              </td>
              <td>
              {
                  company.active ? 
                  (<FaWindowClose className="disable_button" onClick={() => handleToggleButton(company.id)} title="Disable"/>) 
                  : 
                  (<MdDoneOutline className="enable_button" onClick={() => handleToggleButton(company.id)} title="Enable"/>)
                }
              </td>
              <td></td>
              <td>{company.reports}  <span className="field">
                        <BsInfoCircle />
                        <span className="quote">
                          <label>Spam:  <label>{company.reportSpam}</label>
                            </label><br/>
                            <label>Inappropiate Lenguaje: <label>{company.reportLang}</label>
                            </label><br/>
                            <label>False Information: <label>{company.reportFalse}</label>
                            </label><br/>
                         
                            <label>Inappropiate content:
                          <label>{company.reportCoIn}</label>
                            </label><br/>
                         
                          </span>
                         
                          
                       
                      </span>
                      </td>
            </tr>
          ))
        }
        </tbody>
      </table>




                            {/*  */}
                        </div>
                    </div>
                    <div className='summary_container'>
                        <h3 className='mb_1'>Summary</h3>
                        <hr />
                        <div>
                            
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
