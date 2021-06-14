import React, { useEffect, useState } from 'react'
import './Productdetailpage.css'
import {useSelector, useDispatch} from 'react-redux'
import { getProductById } from '../../store/actions/productActions'
import Rating from '../../components/rating/Rating'
import { addToCart } from '../../store/actions/cartActions'


const Productdetailpage = ({match}) => {
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
        <div className='productsdetail_container'>
            <div className="productdetail_wrapper">
                <div className="productdetail_left">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="productdetail_right">
                    <h2>{product.name}</h2>
                    <h3>{product.description}</h3>

                    <div className="rightside_details">
                        <div className="left_price">
                            <p>CHF {product.price}</p>
                        </div>
                        <div className="right_reviews">
                            <Rating value={product.rating} /> {' '} ({product.rating})
                        </div>
                    </div>

                    <hr />

                    <div className="addtocart_wrapper">
                        <div className="container">
                            <select className='addtocart_select' value={quantity} onChange={e => setQuantity(e.target.value)}>
                                {[...Array(product.countInStock).keys()].map(x => {
                                    return <option key={x+1} value={x + 1}>{x + 1}</option>
                                })}
                            </select>
                            <button 
                            className='addtocart_btn'
                            onClick={addToCartHandler}
                            >Add To Cart</button>

                            <i className="far fa-heart"></i>
                        </div>
                    </div>

                    <div className='productdetails_reviews'>
                        <h3>Reviews {product.numReviews}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productdetailpage
