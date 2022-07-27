import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripe_key=process.env.REACT_APP_STRIPE_KEY
const stripePromise = loadStripe(stripe_key);

export const Payment = () => {
  
  return (
    <Elements stripe={stripePromise}>
      
    </Elements>
  );
};


