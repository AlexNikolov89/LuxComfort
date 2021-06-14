import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Register.css'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [passRepeat, setPassRepeat] = useState('')

    const handleSubmit = () => {
        
    }

    return (
        <div className='register_wrapper'>
            <h1>Sign Up</h1>
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
                <button className='signup_btn'>Sign Up</button>
            </form>
        </div>
    )
}

export default Register
