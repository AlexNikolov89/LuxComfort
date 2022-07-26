import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from './style'
import calendar from '../../assets/svg/calendar.svg'
import tools from '../../assets/svg/tools.svg'
import design from '../../assets/svg/desig.svg'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'

const Shoppage = () => {
    const classes = useStyles()
    return (
        <Container maxWidth='xl'>

            <div className={classes.titleContainer}>
                <Typography variant='h4' className={classes.title} gutterBottom>Looking for Inspiration?</Typography>

            
                <Typography variant='subtitle1' className={classes.subtitle}>
                Whether you’re revamping a room or renovating your whole home, get expert design advice from Luxs Designers team.
                Book an in-store or virtual appointment and our team will help transform your space. The best part? It’s totally free.
                </Typography>
            </div>
                <img className={classes.image} src={'/images/background.jpg'} alt='background' />

                <Typography textAlign='center' mt='100px' mb='30px' className={classes.title} variant='h4'>How it Works</Typography>
                <Grid container spacing={0} className={classes.gridContainer} maxWidth='lg'>
                    
                    <Grid  sm={3} xs={3} item className={classes.grid}>
                        <div style={{ background: '#eceff1', borderRadius: '50%', padding: '50px 0' }}>
                            <img src={calendar} alt="calendar" style={{ width: '80px' }} /> 
                        </div>                   
                        <Typography variant='subtitle1' className={classes.text}>Book an appoitment</Typography>
                    </Grid>

                    <Grid lg={3} sm={3} xs={3} item className={classes.grid}>
                        <div style={{ background: '#eceff1', borderRadius: '50%', padding: '50px 0' }}>
                            <img src={tools} alt="tools" style={{ width: '80px' }} /> 
                        </div>                   
                        <Typography variant='subtitle1' className={classes.text}>Share your idea</Typography>
                    </Grid>

                    <Grid lg={3} sm={3} xs={3} item className={classes.grid}>
                        <div style={{ background: '#eceff1', borderRadius: '50%', padding: '50px 0' }}>
                            <img src={design} alt="design" style={{ width: '80px'}} /> 
                        </div>                   
                        <Typography variant='subtitle1' className={classes.text}>Get inspired</Typography>
                    </Grid>
                </Grid>
                
                <Box className={classes.boxContainer}>
                    <img src='/images/design.jpg' alt="inspo-design" style={{ width: '60%' }}  />

                    <div className={classes.box}>
                        <Typography className={classes.title} variant='h4' mb='60px' style={{ textTransform: 'uppercase' }}>Lux Comfort Guidance</Typography>
                        <Typography variant='subtitle1' mb='40px' className={classes.text}>Live a life as individual as you are. Your life isn’t off the shelf, so why should your home be. That’s why you can change the size, colours and materials of nearly every design. And we’re here to help you style your home, your way.</Typography>
                        <Typography variant='subtitle1' mb='80px' className={classes.text}>It’s a desire we all share. Yet busy lives and a lack of confidence often get in the way. Thankfully, our Interior Designers are ready to help, with one goal: to co-create your dream space.</Typography>
                        <Link to='/style-and-advice/livingroom' style={{ textDecoration: 'none' }}>
                            <Button className={classes.button}>Get Inspired</Button>
                        </Link>
                    </div>
                </Box>

        </Container>
    )
}

export default Shoppage
