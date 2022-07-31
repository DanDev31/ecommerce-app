import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../styles/Buttons'
import { Form, FormContainer } from '../styles/Form'
import { FcGoogle } from 'react-icons/fc'
import axios from "axios"

import logo from '../../assets/logo.png'    
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../redux/user/userSlice'

export const Register = () => {

    const [userRegister, setUserRegister] = useState({
        name:"",
        lastName:"",
        email:"",
        password:""
    })

    const { name, lastName, email, password } = userRegister
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3001/users/register', userRegister)
            if(response.data.accessToken){
                dispatch(loginSuccess(response.data))
                navigate(-2)
            }
        } catch (error) {
            console.log(error)
        }
        setUserRegister({
            name:"",
            lastName:"",
            email:"",
            password:""
        })
    }

    const handleInputChange = (e) => {
        setUserRegister(prev => ({...prev, [e.target.name]:e.target.value}))
    }

    const googleAuth = () => {
        window.open("http://localhost:3001/users/google", "_self")
    }


  return (
    <FormContainer>
        <div>
            <div className='form_logo'>
                <img src={logo} alt="" />
            </div>

            <Form onSubmit={handleSubmit}>
            <legend>Registration Form</legend>
                <div className='form_input'>
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" value={name} onChange={handleInputChange}/>
                </div>
                <div className='form_input'>
                    <label htmlFor="">Last Name:</label>
                    <input type="text" name="lastName" value={lastName} onChange={handleInputChange}/>
                </div>
                <div className='form_input'> 
                    <label htmlFor="">Email:</label>
                    <input type="email" name="email" value={email} onChange={handleInputChange}/>
                </div>
                <div className='form_input'>
                    <label htmlFor="">Password:</label>
                    <input type="password" name="password" value={password} onChange={handleInputChange}/>  
                </div>
                <Button type='submit' bgColor="#4586ff" fontSize="1.8rem">Submit</Button>

                <p>or</p>
                
                <Button onClick={() => googleAuth()}>
                    <div>
                        <FcGoogle/>
                        <p>Google</p>
                    </div>
                </Button>

                <div>
                    <Link to='/user/login' className='anchor form_link'>Have an account already?</Link>
                </div>
            </Form>
        </div>
    </FormContainer>
  )
}
