import React, { useState } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        
    }

    return (
        <div className='login_wrapper'>
            <h1>Sign In</h1>
            <form className='form_container' onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder='example@email.com'
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <input 
                type="password" 
                placeholder='********'
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <div className="no_account">
                    <p>No Account Created? </p>
                    <Link to='/register'>Register here!</Link>
                </div>
                <button className='signin_btn'>Sign In</button>
            </form>
        </div>
    )
}

export default Login
