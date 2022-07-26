import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'

const NavbarBottom = () => {
    const classes = useStyles()
    return (
        <Fragment>
            <Link to='/sofas' className={classes.links}>Sofas</Link>
            <Link to='/chairs' className={classes.links}>Chairs</Link>
            <Link to='/dining' className={classes.links}>Dining</Link>
            <Link to='/beds' className={classes.links}>Beds</Link>
            <Link to='/light' className={classes.links}>Light</Link>
            <Link to='/kitchen' className={classes.links}>Kitchen</Link>
            <Link to='/outdoors' className={classes.links}>Outdoors</Link>
            <Link to='/office' className={classes.links}>Office</Link>
            <Link to='/accessories' className={classes.links}>Accessories</Link>
        </Fragment>
    )
}

export default NavbarBottom
