import React, {Fragment} from 'react'
import products from '../../products'
import './LatestProducts.css'


const Product = ({product}) => {
    return (
        <Fragment>
            <div className='product__container'>
                <img src={product.image} alt={product.name} />
                <div className='info__container'>
                    <p style={{ marginRight: '20px' }}>{product.description}</p>
                    <p>CHF<span style={{ fontWeight: 'bold' }}>{product.price}</span></p>
                </div>
            </div>
        </Fragment>
    )
}

export default Product
