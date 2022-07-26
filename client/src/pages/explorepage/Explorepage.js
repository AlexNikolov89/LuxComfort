import { Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from './style'
import {data, trend} from '../../data'


const Exporepage = () => {
    const classes = useStyles()
    return (
        <Container maxWidth='xl'>
            <Typography gutterBottom={true} className={classes.title} variant='h4'>Top Interior Design Trends in 2021</Typography>

            <div>
            <Typography variant='h6' style={{ padding: '0 250px' }}>{trend.text}</Typography>
            <Typography variant='subtitle1' fontWeight='600' style={{ marginLeft: '1000px' }}>{trend.designer}</Typography>
            </div>

            {data.map((item, index) => (
                <Grid container spacing={2} key={index} style={{  alignItems: 'center', justifyContent:'center' }}>
                <Grid item xs={7}>
                <Typography variant='h5' className={classes.subtitle}>{item.title}</Typography>
                    <img src={item.img} alt="warm colors" style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6}>
                   
                    <Typography variant='subtitle1' style={{ width: '100%' }}>{item.text}</Typography>
                </Grid>
            </Grid>
            ))}
        </Container>
    )
}

export default Exporepage
