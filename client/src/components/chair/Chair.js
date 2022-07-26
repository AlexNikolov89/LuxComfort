import { Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'

const Chair = ({chair}) => {
    const classes = useStyles()
    return (
        <div className={classes.chair}>
            <div style={{ width: '100%' }}>
            <Link to={`/product/${chair._id}`} style={{ textDecoration: 'none'}}>
                <img className={classes.image} src={chair.image} alt={chair.name} />
                    
                <div className={classes.price}>
                    <Typography variant='subtitle1' className={classes.typography}>
                        <span style={{ fontWeight: '600' }}>{chair.name}</span>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.typography}>CHF {chair.price}</Typography>
                </div>
               <Typography variant='subtitle1' className={classes.typography}>{chair.description.substr(0, chair.description.indexOf('.'))}</Typography>
                {/*<Typography variant='subtitle1' className={classes.typography}>
                <i className='fas fa-truck'></i>
    Free Shipping</Typography>*/}
                </Link>
                </div>
        </div>
    )
}

export default Chair


// import React from 'react'
// import './Chair.css'
// import Rating from '../rating/Rating'
// import {Link} from 'react-router-dom'

// const Chair = ({chair}) => {
//     //console.log(chair)
    
//     return (
//         <div className='sofa_container'>
//             <div className='sofa_card'>
//                 <div className="sofa_imagewrapper">
//                     <img className='sofa_img' src={chair.image} alt={chair.name} />
//                 </div>

//                 <div className="sofa_info">
//                 <Link to={`/product/${chair._id}`}><h3>{chair.name}</h3></Link>
                    
//                     <div className="sofa_price_wrapper">
//                         <h3>CHF {chair.price}</h3>
//                         <Rating value={chair.rating} text={`${chair.numReviews}reviews`} />
//                     </div>

//                     <p className='shipping'>Free Shipping</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Chair