import React, { Fragment, useEffect, useRef, useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import {Link, useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/actions/userActions';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import {useStyles} from './styles'

import {  Divider, InputBase, Menu, MenuList, Toolbar, Typography } from '@material-ui/core';
import { Badge, Button, IconButton, MenuItem } from '@mui/material';
import Sidebar from '../sidebar/Sidebar';
import NavbarBottom from './NavbarBottom';
import {Cancel} from '@material-ui/icons'



const Navbar = () => {
    
    const dispatch = useDispatch()
    const history = useHistory()

    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)

    const classes = useStyles({open})


    const handleOpenMenu = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

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
        window.localStorage.clear()
        history.push('/')
    }
    

    return (
        <Fragment>
        <Toolbar className={classes.header}>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Sidebar>
                    <IconButton>
                        <MenuIcon color='#607d8b' />
                    </IconButton>
                </Sidebar>

                <Link to='/' style={{ color: '#607d8b', textDecoration: 'none' }}>
                    <Typography color='inherit' variant='h4' ml={1} className={classes.title}>Lux</Typography>
                </Link>
            </div>

            <div className={classes.about}>
                <Link to='/shop' className={classes.links} style={{ marginRight: '100px' }}><Typography variant='h6'>Shop</Typography></Link>
                <Link to='/about' className={classes.links}><Typography variant='h6'>About</Typography></Link>
            </div>

            <div className={classes.search}>
                <SearchIcon style={{ marginLeft: '12px', color: '#CED4DA' }}  />
                <InputBase  placeholder='Search...' className={classes.input}   />
                <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
            </div>

            <div className={classes.icons}>
            <SearchIcon className={classes.searchButton} onClick={() => setOpen(true)} />
            <IconButton color='inherit'>
                <Badge badgeContent={cartItems.length} color="info">
                    <Link to='/cartpage' style={{ color: 'inherit' }}><LocalMallOutlinedIcon /></Link>
                </Badge>
            </IconButton>

            <IconButton color='inherit'>
                <Badge badgeContent={0} color="secondary">
                    <FavoriteBorderIcon />
                </Badge>
            </IconButton>

            <IconButton color='inherit'>
                <AccountCircleIcon 
                onClick={handleOpenMenu} 
                aria-controls='menu'
                />
            </IconButton>

                {userInfo ? (
                    <Menu
                    style={{ marginTop: '30px', padding: '5px 50px' }}
                    id='menu' 
                    anchorEl={anchorEl} 
                    open={Boolean(anchorEl)} 
                    onClose={handleMenuClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: 'visible',
                          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                          mt: 1.5,
                          '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                <Link to='/profile'><MenuItem onClick={handleMenuClose}>Profile</MenuItem></Link>
                <Link to='/orders'><MenuItem onClick={handleMenuClose}>Orders</MenuItem></Link>
                <Button onClick={logoutHandler} >Logout</Button>
           </Menu>
                ) : (
                    <Menu
                    style={{ marginTop: '30px', padding: '5px 50px' }}
                    id='menu' 
                    anchorEl={anchorEl} 
                    open={Boolean(anchorEl)} 
                    onClose={handleMenuClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: 'visible',
                          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                          mt: 1.5,
                          '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                    <Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <MenuItem onClick={handleMenuClose}>Sing In</MenuItem>
                    </Link>
                    <Link to='/register' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
                    </Link> 
                </Menu>
    
                )}
            
            </div>
        </Toolbar>
        <Divider />

        <Typography className={classes.mobileBanner}>
            PRODUCTS · LIFESTYLE · TRENDS
        </Typography>

        <Toolbar className={classes.tagline}>
           <NavbarBottom />
        </Toolbar>
        <Divider />
    </Fragment>
    )
}

export default Navbar






// const NavbarTop = () => {
//     //const classes = useStyles()
//     const dispatch = useDispatch()
//     const history = useHistory()

//     const [open, setOpen] = useState(false)

//     const dropdownHandler = () => {
//         setOpen(open => !open)
//     }

//     const addToCartReducer = useSelector(state => state.addToCartReducer)
//     const {cartItems} = addToCartReducer;

//     const userLoginReducer = useSelector(state => state.userLoginReducer)
//     const { userInfo} = userLoginReducer
//     //console.log("🚀 ~ file: NavbarTop.js ~ line 26 ~ NavbarTop ~ userInfo", userInfo)

//     const logoutHandler = () => {
//         dispatch(logout())
//         window.localStorage.clear()
//         history.push('/')
//     }



//     return (


//         <Fragment>
//             <div className='navbar__container'>
//                 <div className='navbar__logo'>
//                     <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><h1>JOY</h1></Link>
//                 </div>
//                 <div className='navbar__middle'>
//                     <Link className='shop' to="/shop">SHOP</Link>
//                     <Link to="/about">ABOUT</Link>
//                 </div>
//                 <div className='navbar__search'>
//                     <SearchIcon style={{ position: 'absolute', top: '18px', padding: '0 15px' }} />
//                     <input type="text" placeholder='Search for products' />
//                 </div>

                

//                 <div className='navbar__login'>
//                     <Link to='/cartpage'>
                        
//                         <LocalMallOutlinedIcon onClick={dropdownHandler} /> <p>({cartItems.length})</p>
//                     </Link>
//                     <FavoriteBorderIcon style={{ marginRight: '25px' }} />

                    
                   
//                         {open ? (
//                             <div className='dropdown_container'>
//                             {userInfo ? (
//                                 <Fragment>
//                                     <Link to='/profile'><p>{userInfo.name}'s Profile</p></Link>
//                                     <Link to='/orders'><p>{userInfo.name}'s Orders</p></Link>
//                                     <button onClick={logoutHandler}>Logout</button>
//                                 </Fragment>
//                             ) : (
//                                 <Fragment>
//                                     <Link to='/login'><p>Login</p></Link>
//                                     <Link to='/register'><p>Register</p></Link>
//                                 </Fragment>
//                             )}
                                
//                             </div>
//                         ) : null}
//                 </div>
//             </div>
//                             </Fragment>
//     )
// }

// export default NavbarTop
