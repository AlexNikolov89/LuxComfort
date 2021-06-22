import React, {Fragment, useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import './Navbar.css'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/actions/userActions';


const NavbarTop = () => {
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)

    const dropdownHandler = () => {
        setOpen(open => !open)
    }

    const addToCartReducer = useSelector(state => state.addToCartReducer)
    const {cartItems} = addToCartReducer;

    const userLoginReducer = useSelector(state => state.userLoginReducer)
    const { userInfo} = userLoginReducer
    console.log("🚀 ~ file: NavbarTop.js ~ line 26 ~ NavbarTop ~ userInfo", userInfo)

    const logoutHandler = () => {
        dispatch(logout())
    }

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
                    <Link to='/cartpage'>
                        
                        <LocalMallOutlinedIcon onClick={dropdownHandler} /> <p>({cartItems.length})</p>
                    </Link>
                    <FavoriteBorderIcon style={{ marginRight: '25px' }} />

                    
                    <PersonIcon onClick={dropdownHandler} style={{ marginRight: '30px' }} /> 
                        {open ? (
                            <div className='dropdown_container'>
                            {userInfo ? (
                                <Fragment>
                                    <Link to='/profile'><p>{userInfo.name}'s Profile</p></Link>
                                    <Link to='/orders'><p>{userInfo.name}'s Orders</p></Link>
                                    <button onClick={logoutHandler}>Logout</button>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <Link to='/login'><p>Login</p></Link>
                                    <Link to='/register'><p>Register</p></Link>
                                </Fragment>
                            )}
                                
                            </div>
                        ) : null}
                </div>
            </div>
        </Fragment>
    )
}

export default NavbarTop
