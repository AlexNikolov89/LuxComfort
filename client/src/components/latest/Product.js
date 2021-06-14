import React, {Fragment, useEffect} from 'react'
import './LatestProducts.css'
import {Link} from 'react-router-dom'
import { getProductById } from '../../store/actions/productActions'
import {useDispatch, useSelector} from 'react-redux'

const Product = ({product}) => {
    return (
        <Fragment>
            <div className='product__container'>
                
                    <img src={product.image} alt={product.name} />
                    <div className='info__container'>
                    <Link to={`/product/${product._id}`}>
                        <p style={{ marginRight: '20px' }}>{product.description}</p>
                    </Link>
                        <p>CHF<span style={{ fontWeight: 'bold' }}>{product.price}</span></p>
                    </div>
                
            </div>
        </Fragment>
    )
}

export default Product
