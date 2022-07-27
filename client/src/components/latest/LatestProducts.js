import React, {Fragment, useEffect} from 'react'
import Product from './Product'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {useDispatch, useSelector} from 'react-redux'
import { getAllProducts } from '../../store/actions/productActions';
import { Container, Typography } from '@material-ui/core';
import { useStyles } from './styles';


const LatestProducts = () => {
    const classes = useStyles()

    const dispatch = useDispatch()
    let settings = {
        //dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3.5,
        slidesToScroll: 2
    }

    const getAllProductsReducer = useSelector(state => state.getAllProductsReducer)
    const {loading, products, error} = getAllProductsReducer;


    useEffect(() => {
       dispatch(getAllProducts()) 
    }, [dispatch])

    // const allProducts = products.filter(product => product.length === 6)
    // console.log("🚀 ~ file: LatestProducts.js ~ line 19 ~ LatestProducts ~ allProducts", allProducts)

    return (
        <div className={classes.container} style={{ marginBottom: '100px' }}>
            <Typography variant='h4' className={classes.header}>Our Latest Products</Typography>

                <Slider {...settings} className={classes.slider}>
                    {loading && <h1>Loading...</h1>}
                    {error && <h1>Error...</h1>}
                    {products?.map((product) => (
                        <Product product={product} key={product._id} />
                        
                    ))}
                </Slider>
        </div>
    )
}

export default LatestProducts
