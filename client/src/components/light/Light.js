import React from 'react'
import Rating from '../rating/Rating'
import {Link} from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { useStyles } from './style'


const Light = ({light}) => {
    const classes = useStyles()
    return (
        <div className={classes.light}>
            <div style={{ width: '100%' }}>
            <Link to={`/product/${light._id}`} style={{ textDecoration: 'none'}}>
                <img className={classes.image} src={light.image} alt={light.name} />
                    
                <div className={classes.price}>
                    <Typography variant='subtitle1' className={classes.typography}>
                        <span style={{ fontWeight: '600' }}>{light.name}</span>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.typography}>CHF {light.price}</Typography>
                </div>
                <Typography variant='body2' className={classes.typography}>{light.description.substr(0, light.description.indexOf('.'))}</Typography>
                {/*<Typography variant='subtitle1' className={classes.typography}>
                <i className='fas fa-truck'></i>
    Free Shipping</Typography>*/}
                </Link>
                </div>
        </div>
    )
}

export default Light