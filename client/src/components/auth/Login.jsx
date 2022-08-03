import React from 'react'
import { useState } from 'react'
import {  useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../styles/Buttons'
import { Form, FormContainer } from '../styles/Form'
import axios from "axios"

import logo from '../../assets/logo.png'
import { loginSuccess } from '../../redux/user/userSlice'

export const Login = () => {

    const [userLogin, setUserLogin] = useState({
        email:"",
        password:""
    })
    const [loginError, setLoginError] = useState(false)

    const { email, password } = userLogin
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        setUserLogin(prev => ({...prev, [e.target.name]:e.target.value}))
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3001/users/login', userLogin)
            
            if(response.data.accessToken){
                dispatch(loginSuccess(response.data))
                navigate(-1)
            }
        } catch (error) {
            console.log(error)
            setLoginError(true)
            setTimeout(() =>{
                setLoginError(false)
            }, 2500)
        }
        
    }

  return (
    <FormContainer>
        <div>
            <div className='form_logo'>
                <img src={logo} alt="" />
            </div>
            <Form onSubmit={handleSubmit}>
                <legend style={{
                    fontSize:"2rem",
                    fontWeight:"bold",
                    marginBottom:"3rem",
                    textAlign:"center"
                    }}>Login</legend>
                {
                    loginError && <small style={{color:"red"}}>Invalid email or password</small>
                }
                <div className='form_input'>
                    <label htmlFor="">Email:</label>
                    <input type="email" name="email" value={email} onChange={handleInputChange}/>
                </div>
                <div className='form_input'>
                    <label htmlFor="">Password:</label>
                    <input type="password" name="password" value={password} onChange={handleInputChange}/>
                </div>
                <Button type='submit' bgColor="#4586ff" textColor="white" fontSize="1.8rem">Submit</Button>

                <span>or</span>
                <hr />

                <Link to='/user/register' className='anchor form_link'>Create an account</Link>
            </Form>

        </div>
    </FormContainer>
  )
}
