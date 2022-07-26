import React from 'react'
import {Toolbar} from '@material-ui/core'
import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useStyles } from './style'


const NewsLetter = () => {
    const classes = useStyles()
    return (
        <Toolbar className={classes.container}>
            <div style={{ width: '100%',  textAlign: 'center', }}>
                <Typography gutterBottom variant='h5' className={classes.title}>
                    Join Our Newsletter for 10% off 
                </Typography>
                <Typography variant='subtitle1' className={classes.subtitle}>
                    Get a vaucher worth 10% discount on your first order over CHF 100.
                </Typography>
            </div>
            <div className={classes.inputContainer}>
            <TextField 
                className={classes.TextField} 
                fullWidth
                    autoFocus
                    placeholder='Enter e-mail'  
                    variant='outlined'
                    />
            <Button className={classes.button} variant='outlined'>Send</Button>
            </div>
        </Toolbar>
    )
}

export default NewsLetter
