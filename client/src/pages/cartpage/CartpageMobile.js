import { Select, TableCell } from '@material-ui/core'
import { Container, FormControl, MenuItem, Table, TableBody, TableHead, TableRow, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useStyles } from './style';


const CartpageMobile = ({cartItems, addToCart, removeFromCart}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    console.log(cartItems)
    return (
        <Fragment>
                <div className={classes.mobile}>
                    {cartItems.map(item => (
                       <TableRow key={item.id} style={{ border: '1px solid green' }}>
                           <TableCell>
                                <img style={{ width: '120px' }} src={item.image} alt="" />
                            </TableCell>
                            <TableCell>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography style={{ marginRight: '12px' }} variant='body1'>{item.name}</Typography>
                                    <Typography variant='body1'>CHF {item.price}</Typography>
                                </div>
                                <FormControl variant='outlined'>
                                        <Select 
                                        value={item.quantity} 
                                        onChange={(e) => dispatch(addToCart(item, e.target.value))}
                                        >
                                            {[...Array(item.countInStock).keys()].map(x => {
                                                return <MenuItem key={x+1} value={x + 1}>{x + 1}</MenuItem>
                                            })}
                                        
                                        </Select>
                                    </FormControl>
                                    <Typography style={{ textDecoration: 'underline' }} onClick={() => dispatch(removeFromCart(item.id))}>Remove</Typography>
                            </TableCell>
                       </TableRow> 
                    ))}
                    </div>
        </Fragment>
    )
}

export default CartpageMobile
