import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../styles/Buttons'
import { Form, FormContainer } from '../styles/Form'
import logo from '../../assets/logo.png'    
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../redux/user/userSlice'
import { axiosInstance } from '../../axios'

export const Register = () => {

    const [userRegister, setUserRegister] = useState({
        name:"",
        lastName:"",
        email:"",
        password:""
    })
    const [emailError, setEmailError] = useState(true)
    const [passwordError, setPasswordError] = useState(true)
    const [registerError, setRegisterError] = useState(false)

    const { name, lastName, email, password } = userRegister
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await axiosInstance.post('/users/register', userRegister)
            if(response.data.accessToken){
                dispatch(loginSuccess(response.data))
                navigate(-2)
            }
        } catch (error) {
            setRegisterError(true)
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
        if(e.target.name === "email"){
            const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            setEmailError(emailPattern.test(e.target.value))
            
        }
        if(e.target.name === "password"){
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#/=._])[A-Za-z\d@$!%*?&#/=._]{8,}$/
            setPasswordError(passwordPattern.test(e.target.value))
        }

        setUserRegister(prev => ({...prev, [e.target.name]:e.target.value}))
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
                    }}>Registration Form</legend>
                    {
                        registerError && <p style={{color:"red", fontSize:"1.4rem"}}>User already exists, please Login!</p>
                    }
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
                    {
                        !emailError && <small style={{color:"red", fontSize:"1.4rem"}}>Enter a valid email</small>
                    }
                </div>
                <div className='form_input'>
                    <label htmlFor="">Password:</label>
                    <input type="password" name="password" value={password} onChange={handleInputChange}/>{
                        !passwordError && 
                        (<ul style={{color:"red", fontSize:"1.4rem"}}>
                            <li>Must have at least 8 characters</li>
                            <li>It must includes at least 1 uppercase letter</li>
                            <li>It must includes at least 1 lowercase letter</li>
                            <li>It must includes at least 1 number letter</li>
                            <li>It must includes at least 1 special character (@$!%*?&#/=._) letter</li>
                        </ul>)
                    }  
                </div>
                <Button type='submit' bgColor="#4586ff" textColor="white" fontSize="1.8rem">Submit</Button>

                <p style={{textAlign:"center"}}>or</p>

                <div>
                    <Link to='/user/login' className='anchor form_link'>Have an account already?</Link>
                </div>
            </Form>
        </div>
    </FormContainer>
  )
}
