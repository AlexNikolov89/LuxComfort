import { Button, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './style'
import Rating from '../rating/Rating'


const Product = ({product}) => {
    const classes = useStyles()
    return (
        <Paper elevation={0}>
            
            <div className={classes.info}>
            
                <Link to={`/product/${product._id}`} className={classes.link}>
                <img src={product.image} alt={product.name} className={classes.img} />
                    <Typography gutterBottom={true} variant='subtitle2' className={classes.name}>{product.name}</Typography>
                   {/* <div className={classes.rating}>
                        <Rating value={product.rating} className={classes.rating}  />
                        <span style={{ marginLeft: '5px' }}>({product.rating})</span>
    </div>*/}
                    <Typography className={classes.price} variant='h6'>
                        CHF<span style={{ marginLeft: '5px' }}>{product.price}</span>
                    </Typography>
                    <Link to={`/product/${product._id}`} className={classes.link}>
                        <Button className={classes.button} variant='outlined' size='small'>More details</Button>
                    </Link>
                </Link>
                    
            </div>
        </Paper>
    )
}

export default Product
