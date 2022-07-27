import React from 'react'
import Rating from '../rating/Rating'
import {Link} from 'react-router-dom'
import { useStyles } from './style'
import { Card, Grid, Paper, Typography } from '@material-ui/core'

const Sofa = ({sofa}) => {
    const classes = useStyles()
    
    return (
        <div className={classes.sofa}>
            <div style={{ width: '100%' }}>
            <Link to={`/product/${sofa._id}`} style={{ textDecoration: 'none'}}>
                <img className={classes.image} src={sofa.image} alt={sofa.name} />
                    
                <div className={classes.price}>
                    <Typography variant='subtitle1' className={classes.typography}>
                        <span style={{ fontWeight: '600' }}>{sofa.name}</span>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.typography}>CHF {sofa.price}</Typography>
                </div>
               <Typography variant='body2' className={classes.typography}>{sofa.description.substr(0, sofa.description.indexOf('.'))}</Typography>
                {/*<Typography variant='subtitle1' className={classes.typography}>
                <i className='fas fa-truck'></i>
    Free Shipping</Typography>*/}
                </Link>
                </div>
        </div>
    )
}

export default Sofa
