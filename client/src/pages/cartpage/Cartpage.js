import React, {Fragment, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addToCart, removeFromCart } from '../../store/actions/cartActions'
import {Link} from 'react-router-dom'
import {Button, Card, Container, FormControl, MenuItem, Paper, Select, Table, TableBody, TableCell, TableHead, TableRow, Typography} from '@material-ui/core'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckIcon from '@mui/icons-material/Check';
import { useStyles } from './style'
import { Grid } from '@mui/material'
import CartpageMobile from './CartpageMobile'



const Cartpage = () => {
    const classes = useStyles()
        const dispatch = useDispatch()

    const addToCartReducer = useSelector(state => state.addToCartReducer)
    const {cartItems} = addToCartReducer;
    //console.log("🚀 ~ file: Cartpage.js ~ line 8 ~ Cartpage ~ cartItems", cartItems)


    return (
        <Container maxWidth='lg' className={classes.container}>
            {cartItems.length === 0 ? (
                    <div className={classes.linkContainer}>
                        <Typography className={classes.emptyCart}>
                        Your Cart is Empty
                        </Typography>
                    <Link className={classes.link} to='/'>Go Back</Link>
                    </div>
                    ) : (   
                <Table aria-label="caption table" className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHeader}>Product</TableCell>
                            <TableCell className={classes.tableHeader}>Name</TableCell>
                            <TableCell className={classes.tableHeader}>Unite Price</TableCell>
                            <TableCell className={classes.tableHeader}>Quantity</TableCell>
                            <TableCell className={classes.tableHeader}>Total</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItems.map(item => (
                            <TableRow key={item.id}>
                                <TableCell component='th' scope='item'>
                                    <img className={classes.image} src={item.image} alt={item.name} />
                                </TableCell>
                                <TableCell className={classes.tableBody}>{item.name}</TableCell>
                                <TableCell className={classes.tableBody}>CHF {item.price}</TableCell>
                                <TableCell>
                                    <FormControl className={classes.form} variant='outlined'>
                                        <Select 
                                        value={item.quantity} 
                                        onChange={(e) => dispatch(addToCart(item, e.target.value))}
                                        >
                                            {[...Array(item.countInStock).keys()].map(x => {
                                                return <MenuItem key={x+1} value={x + 1}>{x + 1}</MenuItem>
                                            })}
                                        
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell className={classes.tableBody}>
                                    CHF {cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}
                                </TableCell>
                                <TableCell onClick={() => dispatch(removeFromCart(item.id))}>
                                    <HighlightOffIcon />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                
            )}
            <CartpageMobile cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />

            <Grid container className={classes.checkout}>
                
                    <Grid item xs={5} className={classes.gridItem}>
                        <div className={classes.subtotal}>
                            <Typography className={classes.typography}>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)}) items</Typography> 
                            <Typography className={classes.typography}>CHF {cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</Typography>  
                        </div>
                        <Link to='/checkoutpage' style={{ textDecoration: 'none' }}>
                            <Button className={classes.button} variant='outlined' disabled={cartItems.length === 0}>Proceed to Checkout</Button> 
                        </Link>
                    </Grid>
               
            </Grid>

            <Grid container className={classes.gridInfo}>
                <Grid item xs={12} variant='outlined' className={classes.gridInfoItem} >
                <div className={classes.info}>
                    <CheckIcon style={{ color: 'grey' }} /> <Typography className={classes.typographyDown}>Free Store Collection</Typography>
                </div>
                <div className={classes.info}>
                    <CheckIcon style={{ color: 'grey' }} /> <Typography className={classes.typographyDown}>Free Home Delivery</Typography>
                </div>
                <div className={classes.info}>
                    <CheckIcon style={{ color: 'grey' }} /> <Typography className={classes.typographyDown}>Credit Plans Availible</Typography>
                </div>
                <div className={classes.info}>
                    <CheckIcon style={{ color: 'grey' }} /> <Typography className={classes.typographyDown}>Secure Checkout</Typography>
                </div>
                <div className={classes.info}>
                    <CheckIcon style={{ color: 'grey' }} /> <Typography className={classes.typographyDown}>Return made easy</Typography>
                </div>
                </Grid>
            </Grid>
            
        </Container>
    )
}

export default Cartpage



// import React, {useState} from 'react'
// import {useSelector, useDispatch} from 'react-redux'
// import { addToCart, removeFromCart } from '../../store/actions/cartActions'
// import './Cartpage.css'


// const Cartpage = () => {
//     const dispatch = useDispatch()

//     const addToCartReducer = useSelector(state => state.addToCartReducer)
//     const {cartItems} = addToCartReducer;
//     //console.log("🚀 ~ file: Cartpage.js ~ line 8 ~ Cartpage ~ cartItems", cartItems)


//     return (
//         <div className='cartpage_container'>
//             {/*<div className="cartpage_title">
//                 {cartItems.length === 0 ? <h1>Your Cart is Empty</h1> : (
//                     <h1>You have {cartItems.length} item(s) in cart</h1>
//                 )}
                
//                 </div>*/}

//             <div className="cartpage_info_wrapper">

//             <div className="cartpage_leftside">
//             {cartItems.length > 0 && cartItems.map(item => (
//                     <div className="cartpage_item" key={item.id}>
//                         <div className="cartpage_image">
//                             <img src={item.image} alt={item.name} />
//                         </div>
//                         <div className="cartpage_info">
//                             <h3>{item.name}</h3>
//                             <p>Price: CHF {item.price}</p>
//                             Stock:{' '}
//                             <select className='addtocart_select' value={item.quantity} onChange={(e) => dispatch(addToCart(item, e.target.value))}>
//                                     {[...Array(item.countInStock).keys()].map(x => {
//                                         return <option key={x+1} value={x + 1}>{x + 1}</option>
//                                     })}
//                                 </select>
//                         </div>

//                         <div className="cartpage_remove">
//                             <p>Remove Item <i className="fas fa-times" onClick={() => dispatch(removeFromCart(item))}></i></p>
//                         </div>

//                     </div>
//             ))}
//            </div>

//            <div className="cartpage_rightside">
//                <div className="cartpage_total">
//                <h3>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)}) items</h3>
//                     <h3>CHF {cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</h3>
//                </div>
               
//                <div className="cartpage_total">
//                     <h3>Total</h3>
//                     <h3>CHF {cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</h3>
//                </div>
//                <h4 className='cartpage_delivery'>Delivery: <span>FREE</span></h4>
//            </div>
           
//            </div>
//         </div>
//     )
// }

// export default Cartpage
