import React from 'react'
import { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';


const stripe_key=process.env.REACT_APP_STRIPE_KEY

export const Order = () => {

    const [ stripeToken, setStripeToken ] = useState(null)
    console.log(stripe_key)

    const onToken = (token) => {
        setStripeToken(token)
    }

  return (
    <div>
        Order

        <StripeCheckout
            name='TechnoShop'
            image='https://services.tochat.be/icns/categories/e-commerce.png'
            billingAddress
            shippingAddress
            description=''
            amount={2000}
            token={onToken}
            stripeKey={stripe_key}
        >
            <button>Pay now</button>
        </StripeCheckout>
    </div>
  )
}
