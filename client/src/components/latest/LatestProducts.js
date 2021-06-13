import React, {Fragment} from 'react'
import Product from './Product'
import './LatestProducts.css'
import products from '../../products'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const LatestProducts = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1
    }

    // const allProducts = products.filter(product => product.length === 6)
    // console.log("🚀 ~ file: LatestProducts.js ~ line 19 ~ LatestProducts ~ allProducts", allProducts)

    return (
        <Fragment>
            <div className='latestproduct__wrapper'>
                <h1>Our Latest Products</h1>

                <Slider {...settings}>
                
                    {products.map(product => {
                        return <Product product={product} key={product.id} />
                        
                    })}
                </Slider>
            </div>
        </Fragment>
    )
}

export default LatestProducts
