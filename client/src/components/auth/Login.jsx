import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from "../../redux/apiCalls"
import { Button } from '../styles/Buttons'
import { Form, FormContainer } from '../styles/Form'

import logo from '../../assets/logo.png'

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const { error } = useSelector(state => state.user)

    const handleSubmit = (e) => {
        e.preventDefault()
        login(dispatch, { email, password })
    }

  return (
    <FormContainer>
        <div>
            <div className='form_logo'>
                <img src={logo} alt="" />
            </div>
            <Form onSubmit={handleSubmit}>
                <legend>Login</legend>
                {
                    error && <p>You must provide and email and password</p>
                }
                <div className='form_input'>
                    <label htmlFor="">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='form_input'>
                    <label htmlFor="">Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <Button type='submit' bgColor="#4586ff" fontSize="1.8rem">Submit</Button>

                <span>or</span>
                <hr />

                <Link to='/user/register' className='anchor form_link'>Create an account</Link>
            </Form>

        </div>
    </FormContainer>
  )
}
