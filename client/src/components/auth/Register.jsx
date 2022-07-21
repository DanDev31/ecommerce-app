import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { apiFetch } from '../../helpers/apiFetch'


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
    <div>
        <h2>Logo</h2>

        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="">Last Name:</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <label htmlFor="">Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="">Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit'>Submit</button>

            <div>
                <Link to='/user/login'>Have an account already?</Link>
            </div>
        </form>
    </div>
  )
}
