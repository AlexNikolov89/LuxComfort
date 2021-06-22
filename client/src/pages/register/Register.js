import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { userRegister } from '../../store/actions/userActions'
import './Register.css'
import {useDispatch, useSelector} from 'react-redux'

const Register = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [passRepeat, setPassRepeat] = useState('')

    const registerReducer = useSelector(state => state.registerReducer)
    const {loading, userInfo, error} = registerReducer

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(password === passRepeat) {
            dispatch(userRegister({email, name, password}))
            history.push('/')
        } else {
            alert('Invalid data')
            
        }
    }

    return (
        
        <div className='register_wrapper'>
            <h1>Sign Up</h1>

            {loading && <h1>Loading...</h1>}
            {error && <h1>Error...</h1>}
            
            <form className='register_form_container' onSubmit={handleSubmit}>
                <div className="input_left">
                    <input 
                    type="text" 
                    placeholder='example@email.com'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                    type="text" 
                    placeholder='Name Surname'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="input_right">
                    <input 
                    type="password" 
                    placeholder='********'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                    <input 
                    type="password" 
                    placeholder='password Repeat'
                    value={passRepeat}
                    onChange={e => setPassRepeat(e.target.value)}
                    />
                </div>
                <div className="have_account">
                    <p>Already have an Account? </p>
                    <Link to='/login'>Sign In</Link>
                </div>
                <button onSubmit={handleSubmit} className='signup_btn'>Sign Up</button>
            </form>
        </div>
    )
}

export default Register
