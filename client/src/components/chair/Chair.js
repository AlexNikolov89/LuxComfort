import React from 'react'
import './Chair.css'
import Rating from '../rating/Rating'
import {Link} from 'react-router-dom'

const Chair = ({chair}) => {
    //console.log(chair)
    
    return (
        <div className='sofa_container'>
            <div className='sofa_card'>
                <div className="sofa_imagewrapper">
                    <img className='sofa_img' src={chair.image} alt={chair.name} />
                </div>

                <div className="sofa_info">
                <Link to={`/product/${chair._id}`}><h3>{chair.name}</h3></Link>
                    
                    <div className="sofa_price_wrapper">
                        <h3>CHF {chair.price}</h3>
                        <Rating value={chair.rating} text={`${chair.numReviews}reviews`} />
                    </div>

                    <p className='shipping'>Free Shipping</p>
                </div>
            </div>
        </div>
    )
}

export default Chair