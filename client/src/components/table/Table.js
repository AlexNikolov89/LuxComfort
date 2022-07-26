import React from 'react'
import {useStyles} from './style'
import {Link} from 'react-router-dom'
import { Typography } from '@material-ui/core'

const Table = ({table}) => {
    const classes = useStyles()
    return (
        <div className={classes.table}>
            <div style={{ width: '100%' }}>
            <Link to={`/product/${table._id}`} style={{ textDecoration: 'none'}}>
                <img className={classes.image} src={table.image} alt={table.name} />
                    
                <div className={classes.price}>
                    <Typography variant='subtitle1' className={classes.typography}>
                        <span style={{ fontWeight: '600' }}>{table.name}</span>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.typography}>CHF {table.price}</Typography>
                </div>
                <Typography variant='body2' className={classes.typography}>{table.description.substr(0, table.description.indexOf('.'))}</Typography>
                {/*<Typography variant='subtitle1' className={classes.typography}>
                <i className='fas fa-truck'></i>
    Free Shipping</Typography>*/}
                </Link>
                </div>
        </div>
    )
}

export default Table
    