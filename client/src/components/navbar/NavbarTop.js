import React, {Fragment, useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import './Navbar.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';


const NavbarTop = () => {
    const [open, setOpen] = useState(false)

    const dropdownHandler = () => {
        setOpen(open => !open)
    }

    const addToCartReducer = useSelector(state => state.addToCartReducer)
    const {cartItems} = addToCartReducer;

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
                    <LocalMallOutlinedIcon /> <p>({cartItems.length})</p>
                    <FavoriteBorderIcon style={{ marginRight: '25px' }} />
                    <PersonIcon onClick={dropdownHandler} style={{ marginRight: '30px' }} />
                        {open ? (
                            <div className='dropdown_container'>
                                <Link to='/login'>Login / Register</Link>
                                <hr />
                                <Link to='/orders'>My Orders</Link>
                            </div>
                        ) : null}
                </div>
            </div>
        </Fragment>
    )
}

export default NavbarTop
