import React, {Fragment, useEffect} from 'react'
import Product from './Product'
import './LatestProducts.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {useDispatch, useSelector} from 'react-redux'
import { getAllProducts } from '../../store/actions/productActions';


const LatestProducts = () => {
    const dispatch = useDispatch()
    let settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1
    }

    const getAllProductsReducer = useSelector(state => state.getAllProductsReducer)
    const {loading, products, error} = getAllProductsReducer;


    useEffect(() => {
       dispatch(getAllProducts()) 
    }, [dispatch])

    // const allProducts = products.filter(product => product.length === 6)
    // console.log("🚀 ~ file: LatestProducts.js ~ line 19 ~ LatestProducts ~ allProducts", allProducts)

    return (
        <Fragment>
            <div className='latestproduct__wrapper'>
                <h1>Our Latest Products</h1>

                <Slider {...settings}>
                    {loading && <h1>Loading...</h1>}
                    {error && <h1>Error...</h1>}
                    {products.map((product) => {
                        return <Product product={product} key={product._id} />
                        
                    })}
                </Slider>
            </div>
        </Fragment>
    )
}

export default LatestProducts
