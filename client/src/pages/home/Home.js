import React, { Fragment } from 'react'
import LatestProducts from '../../components/latest/LatestProducts'
import {Link} from 'react-router-dom'
import { useStyles } from './styles'
import { Button, Container, Typography } from '@material-ui/core'
import Categories from '../../components/categories/Categories'
import Banner from '../../components/banner/Banner'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import DesignSteps from '../../components/designSteps/DesignSteps'
import DecoratingTips from '../../components/decoratingTips/DecoratingTips'
import AllProducts from '../../components/allProducts/AllProducts'


const Home = () => {
    const classes = useStyles()
    return (
        <Container maxWidth='xl'>
            <Banner />
            <Categories />
            <LatestProducts />
            <DesignSteps />
            <DecoratingTips />
            <AllProducts />
            <NewsLetter />
        </Container>
    )
}

export default Home
