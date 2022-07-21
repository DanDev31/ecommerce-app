import React from 'react'
import { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const stripe_key=process.env.REACT_APP_STRIPE_KEY

export const Order = () => {

    const [ stripeToken, setStripeToken ] = useState(null)
   
    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeStripeRequest = async() => {
            console.log("entro")
            try {
                const res = await axios.post('http://localhost:3001/order/payment', {
                        tokenId:stripeToken.id,
                        amount:2000
                    })
                    console.log(res.data)
            }
            catch (error) {
                console.log(error)
            }
        }

        stripeToken && makeStripeRequest()
    }, [stripeToken])

  return (
    <div>
        Order

        {
            stripeToken ? (<span>Processing your order. Please wait...</span>)
            :
            (
                <StripeCheckout
                        name='TechnoShop'
                        image='https://services.tochat.be/icns/categories/e-commerce.png'
                        billingAddress
                        shippingAddress
                        description='hola'
                        amount={2000}
                        token={onToken}
                        stripeKey={stripe_key}
                    >
                        <button>Pay now</button>
                </StripeCheckout>
            )
        }
        
    </div>
  )
}
