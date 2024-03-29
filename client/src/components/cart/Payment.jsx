import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { CircularProgress } from '@mui/material';
import {
        Elements, 
        CardElement, 
        useStripe, 
        useElements, 
        } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {Button} from '../styles/Buttons'
import { Form } from '../styles/Form';
import Swal from 'sweetalert2'

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/cart/cartSlice';
import { axiosInstance } from '../../axios';

import './payment.css'

const stripe_key=process.env.REACT_APP_STRIPE_KEY
const stripePromise = loadStripe(stripe_key);


const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50rem",
    bgcolor: 'background.paper',
    p: 5,
  };

  let style = {
        
    base: {
        border: "1px solid gray",
        color: 'black',
        fontFamily: 'Raleway,sans-serif',
        fontSize: '1.4rem'
    }
    
};

  const CheckOutForm = ({finalTotal, setOpenModal}) => {

    const stripe = useStripe()
    const elements = useElements()
    const [ loading, setLoading ] = useState(false)
    const [ paymentError, setPaymentError ] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
      e.preventDefault()
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type:'card',
        card:elements.getElement(CardElement)
      })
      setLoading(true)
      
      if(!error){
        const { id } = paymentMethod;

        try {

          await axiosInstance.post('/order/checkout',{
            id,
            amount:finalTotal
          })
          elements.getElement(CardElement).clear();
          Swal.fire({
            icon: 'success',
            title: 'Payment complete',
            timer: 2000
          })
          dispatch(cartActions.clearCart())
        } catch (err) {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong!',
            text: 'Try again please',
          })
        }
        setLoading(false)
        setOpenModal(false)
      }else{
        setPaymentError(true)
        setLoading(false)
      } 
        navigate("/")
    }
    return (
      <Form onSubmit={handleSubmit} className="payment_form">
          <div className='payment_form_item'>
            <label>Name:</label>
            <input type="text" required/>
          </div>
          <div className='payment_form_item'>
            <label>Adress:</label>
            <input type="text" required/>
          </div>
          <div className='payment_form_tow_columns'>
            <div className='payment_form_item'>
              <label>City:</label>
              <input type="text" required/>
            </div>
            <div className='payment_form_item'>
              <label>Country:</label>
              <input type="text" required/>
            </div>
          </div>
          <div className='card_element_wrapper'>
            <CardElement options = {{hidePostalCode: true, style: style}}/>
          </div>
          {
            paymentError && <span style={{color:"red", fontSize:"1.4rem"}}>You must provide all card information</span>
          }
          <Button disabled={!stripe} bgColor="#f5a131" fontSize="1.6rem">{
            loading ? 
            <CircularProgress />
            :
            "Pay"
          }</Button>
      </Form>
    )
  }



export const Payment = ({openModal, setOpenModal, finalTotal}) => {
  
  const handleClose = () => setOpenModal(false);

  return (
    
    <div>
        <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"  
      >
        <Box sx={modalStyle}>
          <p className='payment_message'>Great. You're almost done!</p>
          <div className='payment_box_title'>
            <div className='payment_total_box'>
              <p>Your total is:</p>
              <span>{ finalTotal }</span>
            </div>
          </div>  
            <Elements stripe={stripePromise} >
                <CheckOutForm finalTotal={finalTotal} setOpenModal={setOpenModal}/>
            </Elements>
        </Box>
      </Modal>
    </div>
  );
};


