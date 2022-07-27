import React, { useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { loginUser } from '../../store/actions/userActions'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Grid, TextField, Button, Typography } from '@material-ui/core'

// import Grid from '@material-ui/core/Grid'
// import Paper from '@material-ui/core/Paper'
// import TextField from '@material-ui/core/TextField'
// import Button from '@material-ui/core/Button/Button'
// import Typography from '@material-ui/core/Typography'
import { useStyles } from './styles'
import { Box } from '@mui/system'
import { Avatar, Container } from '@mui/material';


const Login = ({location}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const [email, setEmail] = useState('nikolov.aleksandra@hotmail.com')
    const [password, setPassword] = useState('123456')

    const userLoginReducer = useSelector(state => state.userLoginReducer)
    const {loading, userInfo, error} = userLoginReducer

    // useEffect(() => {
    //     if(userInfo) {
    //         history.push('/')
    //     }
    // },[history, userInfo])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser({email, password}))
        history.push('/')
        if(userInfo) {
            
        }
        
    }

    return (
        <Container maxWidth='xs' className={classes.wrapper}>

            <Box className={classes.container}>
            
                <Avatar className={classes.avatar} style={{ background: '#37474f' }}>
                    <LockOutlinedIcon className={classes.icon} />
                </Avatar>

                <Typography component="h1" variant="h4" className={classes.title}>
                    Sign In
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
                            to='/register'>
                            Don't have and account? Register
                        </Link>
                    </Grid>
                </Grid>

                
           </form>
           </Box>
        </Container>
    )
}

//     return (
//         <div className='login_wrapper'>
//             <h1>Sign In</h1>
//             <form className='form_container' onSubmit={handleSubmit}>
//                 <input 
//                 type="text" 
//                 placeholder='example@email.com'
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//                 />
//                 <input 
//                 type="password" 
//                 placeholder='********'
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}
//                 />
//                 <div className="no_account">
//                     <p>No Account Created? </p>
//                     <Link to='/register'>Register here!</Link>
//                 </div>
//                 <button onSubmit={handleSubmit} className='signin_btn'>Sign In</button>
//             </form>
//         </div>
//     )
// }

export default Login
