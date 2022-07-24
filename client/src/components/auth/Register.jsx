import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { apiFetch } from '../../helpers/apiFetch'
import { Button } from '../styles/Buttons'
import { Form, FormContainer } from '../styles/Form'

import logo from '../../assets/logo.png'

const endPoint = 'http://localhost:3001/users/register'

export const Register = () => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        apiFetch("post", endPoint, {name, lastName, email, password})
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
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='form_input'>
                    <label htmlFor="">Last Name:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className='form_input'> 
                    <label htmlFor="">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='form_input'>
                    <label htmlFor="">Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>  
                </div>
                <Button type='submit' bgColor="#4586ff" fontSize="1.8rem">Submit</Button>

                <div>
                    <Link to='/user/login' className='anchor form_link'>Have an account already?</Link>
                </div>
            </Form>
        </div>
    </FormContainer>
  )
}
