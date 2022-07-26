import { Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from './style'
import {Link} from 'react-router-dom'



const Banner = () => {
    const classes= useStyles()
    return (
        <Card className={classes.cover}>
            <div className={classes.container}>
            <CardContent className={classes.textContainer}>
                <Typography className={classes.title}>Create Comfort <br /> On your Living Space</Typography>   
            </CardContent>

            <CardActions>
                <Button variant='outlined' className={classes.button}>
                    <Link className={classes.link} to='/top-interior-trends'>Explore</Link>
                </Button>
            </CardActions>
            </div>
        </Card>
    )
}

export default Banner