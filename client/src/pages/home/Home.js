import React, { Fragment } from 'react'
import products from '../../products'
import Banner from '../../images/livingroomcover.jpg'
import './Home.css'
import LatestProducts from '../../components/latest/LatestProducts'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <Fragment>
            <div className='home__container'>
                <div className='home__banner'>
                    <img style={{ width: '100%' }} src={Banner} alt="livingroom"/>
                    <Link to='/style-and-advice/livingroom' style={{ color: 'black' }}>
                    <div className='banner__text'>
                        <h1>Discover handy tips and</h1>
                        <h2>styling inspiration</h2>
                    </div>
                    </Link>
                </div>

                <div className='home__container__products'>
                    <LatestProducts />
                </div>
            </div>

        </Fragment>
    )
}

export default Home
