import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from "../../redux/apiCalls"

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
    <div>
        <h2>Logo</h2>

        <form onSubmit={handleSubmit}>
            {
                error && <p>You must provide and email and password</p>
            }
            <label htmlFor="">Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="">Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit'>Submit</button>

            <small>Or</small>

            <Link to='/user/register'>Create an account</Link>
        </form>
    </div>
  )
}
