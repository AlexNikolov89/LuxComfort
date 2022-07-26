import React, { useEffect, useState } from 'react'
//import './Productdetailpage.css'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { getProductById } from '../../store/actions/productActions'
import Rating from '../../components/rating/Rating'
import { addToCart } from '../../store/actions/cartActions'

import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Divider, FormControl, InputLabel, MenuItem, Select, Typography} from '@material-ui/core'
import { useStyles } from './styles'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Productdetailpage = ({match}) => {
    const classes = useStyles()

    const [color, setCoulor] = useState('grey')

    const dispatch = useDispatch()

        const [quantity, setQuantity] = useState(1)
    
        const getProductByIdReducer = useSelector(state => state.getProductByIdReducer)
        const {loading, product, error} = getProductByIdReducer;
    
        useEffect(() => {
            dispatch(getProductById(match.params.id))
        }, [dispatch, match])
    
        const addToCartHandler = () => {
            dispatch(addToCart(product, quantity))
            //alert(quantity)
        }

    return (
        <div className={classes.container}>
        <Card elevation={0} square={true}>
            <CardActionArea className={classes.card}>
                <CardMedia 
                component='img'
                alt={product.name}
                image={product.image}
                className={classes.image}
                />
                <CardContent className={classes.content}>
                    <CardActions className={classes.cardInfo}>
                        <Typography variant='h5' className={classes.typography}>{product.name} Bed</Typography>
                        <FavoriteBorderIcon style={{ fontSize: '30px' }} />
                    </CardActions>

                    <CardActions style={{ justifyContent: 'space-between' }}>
                        <Typography className={classes.typography} style={{ margin: '20px 0' }} variant='h6'>{product.description}</Typography>
                        
                    </CardActions>

                    <CardActions>
                    <Typography className={classes.typography} variant='h5'>CHF{product.price}</Typography>
                    </CardActions>

                    <CardActions style={{ display: 'flex' }}>
                        <Rating value={product.rating} /><span style={{ marginLeft: '10px', margin: '20px 0' }}>({product.rating})</span>
                    </CardActions>

                    <Divider />
                   {/* <Typography>Color: </Typography>
                   {product.color ? <Typography>{product.color}</Typography> : color}*/}
                   <CardActions>
                    <Link to='/product-description' style={{  color: 'inherit' }}>
                        <Typography className={classes.typography}>Product Details</Typography>
                    </Link>
                   </CardActions>

                   <Divider />

                   <CardActions>
                        {product.countInStock > 0 ? (
                            <Typography className={classes.typography}>In Stock: {' '}{product.countInStock}</Typography>
                            ) : (
                                <Typography className={classes.typography}>Out of Stock</Typography>
                                )}
                   </CardActions>

                   <Divider />

                   <CardActions className={classes.formWrapp}>
                        <FormControl variant='outlined' className={classes.form}>
                            <Select 
                            value={quantity} 
                            onChange={e => setQuantity(e.target.value)}
                            >
                                {[...Array(product.countInStock).keys()].map(x => {
                                    return <MenuItem key={x+1} value={x + 1}>{x + 1}</MenuItem>
                                })}
                            
                            </Select>
                        </FormControl>
                        <Button 
                        className={classes.button}
                        disabled={product.countInStock === 0}
                        variant='outlined'
                        onClick={addToCartHandler}>
                        Add To Cart
                        </Button>
                   </CardActions>

                   
                </CardContent>

            </CardActionArea>
        </Card>
        </div>
    )
}

export default Productdetailpage



// import React, { useEffect, useState } from 'react'
// //import './Productdetailpage.css'
// import {useSelector, useDispatch} from 'react-redux'
// import { getProductById } from '../../store/actions/productActions'
// import Rating from '../../components/rating/Rating'
// import { addToCart } from '../../store/actions/cartActions'



// const Productdetailpage = ({match}) => {
//     const dispatch = useDispatch()

//     const [quantity, setQuantity] = useState(1)

//     const getProductByIdReducer = useSelector(state => state.getProductByIdReducer)
//     const {loading, product, error} = getProductByIdReducer;

//     useEffect(() => {
//         dispatch(getProductById(match.params.id))
//     }, [dispatch, match])

//     const addToCartHandler = () => {
//         dispatch(addToCart(product, quantity))
//         //alert(quantity)
//     }
    
//     return (
//         <div className='productsdetail_container'>
//             <div className="productdetail_wrapper">
//                 <div className="productdetail_left">
//                     <img src={product.image} alt={product.name} />
//                 </div>

//                 <div className="productdetail_right">
//                     <h2>{product.name}</h2>
//                     <h3>{product.description}</h3>

//                     <div className="rightside_details">
//                         <div className="left_price">
//                             <p>CHF {product.price}</p>
//                         </div>
//                         <div className="right_reviews">
//                             <Rating value={product.rating} /> {' '} ({product.rating})
//                         </div>
//                     </div>

//                     <hr />

//                     <div className="addtocart_wrapper">
//                         <div className="container">
//                             <select className='addtocart_select' value={quantity} onChange={e => setQuantity(e.target.value)}>
//                                 {[...Array(product.countInStock).keys()].map(x => {
//                                     return <option key={x+1} value={x + 1}>{x + 1}</option>
//                                 })}
//                             </select>
//                             <button 
//                             className='addtocart_btn'
//                             onClick={addToCartHandler}
//                             >Add To Cart</button>

//                             <i className="far fa-heart"></i>
//                         </div>
//                     </div>

//                     <div className='productdetails_reviews'>
//                         <h3>Reviews {product.numReviews}</h3>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Productdetailpage
