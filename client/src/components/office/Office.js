import React from 'react'
import {Link} from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { useStyles } from './style'


const Office = ({item}) => {
    const classes = useStyles()
    return (
        <div className={classes.office}>
            <div style={{ width: '100%' }}>
            <Link to={`/product/${item._id}`} style={{ textDecoration: 'none'}}>
                <img className={classes.image} src={item.image} alt={item.name} />
                    
                <div className={classes.price}>
                    <Typography variant='subtitle1' className={classes.typography}>
                        <span style={{ fontWeight: '600' }}>{item.name}</span>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.typography}>CHF {item.price}</Typography>
                </div>
                <Typography variant='body2' className={classes.typography}>{item.description.substr(0, item.description.indexOf('.'))}</Typography>
                {/*<Typography variant='subtitle1' className={classes.typography}>
                <i className='fas fa-truck'></i>
    Free Shipping</Typography>*/}
                </Link>
                </div>
        </div>
    )
}

export default Office