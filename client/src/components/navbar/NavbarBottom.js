import React, { Fragment } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const NavbarBottom = () => {
    return (
        <Fragment>
            <div className='navbar__bottom__container'>
                <Link to='/sofas'>Sofas</Link>
                <Link to='/chairs'>Chairs</Link>
                <Link to='/tables'>Tables</Link>
                <Link to='/beds'>Beds</Link>
                <Link to='/lightening'>Lightening</Link>
                <Link to='/gardening'>Garden</Link>
                <Link to='/office'>Office</Link>
                <Link to='/accessories'>Accessories</Link>
            </div>
        </Fragment>
    )
}

export default NavbarBottom
