import React from 'react'
import Rating from '../rating/Rating'
import {Link} from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { useStyles } from './style'


const Outdoor = ({outdoor}) => {
    const classes = useStyles()
    return (
        <div className={classes.outdoor}>
            <div style={{ width: '100%' }}>
            <Link to={`/product/${outdoor._id}`} style={{ textDecoration: 'none'}}>
                <img className={classes.image} src={outdoor.image} alt={outdoor.name} />
                    
                <div className={classes.price}>
                    <Typography variant='subtitle1' className={classes.typography}>
                        <span style={{ fontWeight: '600' }}>{outdoor.name}</span>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.typography}>CHF {outdoor.price}</Typography>
                </div>
                <Typography variant='body2' className={classes.typography}>{outdoor.description.substr(0, outdoor.description.indexOf('.'))}</Typography>
                {/*<Typography variant='subtitle1' className={classes.typography}>
                <i className='fas fa-truck'></i>
    Free Shipping</Typography>*/}
                </Link>
                </div>
        </div>
    )
}

export default Outdoor