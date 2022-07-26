import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { userRegister } from '../../store/actions/userActions'
import {useDispatch, useSelector} from 'react-redux'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button/Button'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './styles'
import { Avatar, Box, Container } from '@material-ui/core'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Register = () => {
   const classes = useStyles()
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
        <Container maxWidth='xs' className={classes.wrapper}>

            <Box className={classes.container}>
            
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon className={classes.icon} />
                </Avatar>

                <Typography component="h1" variant="h4" className={classes.title}>
                    Sign Up
                </Typography>
                
                <form onSubmit={handleSubmit} className={classes.form}>
                
                    <TextField 
                    fullWidth
                    label='Emal' 
                    autoFocus
                    placeholder='Enter e-mail'  
                    required 
                    className={classes.input}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    variant='outlined'
                    />
                    <TextField 
                    fullWidth
                    label='Username' 
                    placeholder='Enter Username'  
                    required 
                    autoFocus
                    className={classes.input}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    variant='outlined'
                    />
                    <TextField 
                    fullWidth
                    autoFocus
                    label='Password' 
                    placeholder='Enter password' 
                    type='password'  
                    required 
                    className={classes.input}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    variant='outlined'
                    />
                    <TextField 
                    fullWidth
                    autoFocus
                    label='Password Repeat' 
                    placeholder='Password Repeat' 
                    type='password'  
                    required 
                    className={classes.input}
                    value={passRepeat}
                    onChange={e => setPassRepeat(e.target.value)}
                    variant='outlined'
                    />
                    <Button 
                    className={classes.button}
                    type='submit'
                    fullWidth
                    variant='contained' 
                    onSubmit={handleSubmit}
                    >Sign In</Button>

                <Grid container className={classes.links}>
                    <Grid item xs>
                        <Link to='/' className={classes.link}>Forgot password?</Link>
                    </Grid>
                    <Grid item>
                        <Link className={classes.link} 
                            to='/login'>
                            Already have an account? Login
                        </Link>
                    </Grid>
                </Grid>

                
           </form>
           </Box>
        </Container>
    )
}

//     return (
        
//         <div className='register_wrapper'>
//             <h1>Sign Up</h1>

//             {loading && <h1>Loading...</h1>}
//             {error && <h1>Error...</h1>}
            
//             <form className='register_form_container' onSubmit={handleSubmit}>
//                 <div className="input_left">
//                     <input 
//                     type="text" 
//                     placeholder='example@email.com'
//                     value={email}
//                     onChange={e => setEmail(e.target.value)}
//                     />
//                     <input 
//                     type="text" 
//                     placeholder='Name Surname'
//                     value={name}
//                     onChange={e => setName(e.target.value)}
//                     />
//                 </div>
//                 <div className="input_right">
//                     <input 
//                     type="password" 
//                     placeholder='********'
//                     value={password}
//                     onChange={e => setPassword(e.target.value)}
//                     />
//                     <input 
//                     type="password" 
//                     placeholder='password Repeat'
//                     value={passRepeat}
//                     onChange={e => setPassRepeat(e.target.value)}
//                     />
//                 </div>
//                 <div className="have_account">
//                     <p>Already have an Account? </p>
//                     <Link to='/login'>Sign In</Link>
//                 </div>
//                 <button onSubmit={handleSubmit} className='signup_btn'>Sign Up</button>
//             </form>
//         </div>
//     )
// }

export default Register
