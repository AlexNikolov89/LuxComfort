import React, {Fragment} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import './Navbar.css'
import {Link} from 'react-router-dom'

const NavbarTop = () => {
    return (
        <Fragment>
            <div className='navbar__container'>
                <div className='navbar__logo'>
                    <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><h1>JOY</h1></Link>
                </div>
                <div className='navbar__middle'>
                    <Link className='shop' to="/shop">SHOP</Link>
                    <Link to="/about">ABOUT</Link>
                </div>
                <div className='navbar__search'>
                    <SearchIcon style={{ position: 'absolute', top: '18px', padding: '0 15px' }} />
                    <input type="text" placeholder='Search for products' />
                </div>

                <div className='navbar__login'>
                    <PersonIcon style={{ marginRight: '25px' }} />
                    <FavoriteBorderIcon style={{ marginRight: '25px' }} />
                    <LocalMallOutlinedIcon style={{ marginRight: '80px' }} />
                </div>
            </div>
        </Fragment>
    )
}

export default NavbarTop
