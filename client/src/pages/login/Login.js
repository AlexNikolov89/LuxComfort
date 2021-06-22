import React, { useEffect, useState } from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { loginUser } from '../../store/actions/userActions'



const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userLoginReducer = useSelector(state => state.userLoginReducer)
    const {loading, userInfo, error} = userLoginReducer

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser({email, password}))
        history.push('/')
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
                <button onSubmit={handleSubmit} className='signin_btn'>Sign In</button>
            </form>
        </div>
    )
}

export default Login
