import React from 'react'
import './Sofa.css'
import Rating from '../rating/Rating'
import {Link} from 'react-router-dom'

const Sofa = ({sofa}) => {
    //const productId = match.params.id;

    //console.log(sofa)
    return (
        <div className='sofa_container'>
            <div className='sofa_card'>
                <div className="sofa_imagewrapper">
                    <img className='sofa_img' src={sofa.image} alt={sofa.name} />
                    <i className="far fa-heart"></i>
                </div>

                <div className="sofa_info">
                <Link to={`/product/${sofa.id}`}><h3>{sofa.name}</h3></Link>
                    
                    <div className="sofa_price_wrapper">
                        <h3>CHF {sofa.price}</h3>
                        <Rating value={sofa.rating} text={`${sofa.numReviews}reviews`} />
                    </div>

                    <p className='shipping'>Free Shipping</p>
                </div>
            </div>
        </div>
    )
}

export default Sofa
