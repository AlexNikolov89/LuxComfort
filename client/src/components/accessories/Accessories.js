import React from 'react'
import Rating from '../rating/Rating'
import {Link} from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { useStyles } from './style'


const Accessories = ({item}) => {
    const classes = useStyles()
    return (
        <div className={classes.accessories}>
            <div style={{ width: '100%' }}>
            <Link to={`/product/${item._id}`} style={{ textDecoration: 'none'}}>
                <img className={classes.image} src={item.image} alt={item.name} />
                    
                <div className={classes.price}>
                    <Typography variant='subtitle1' className={classes.typography}>
                        <span style={{ fontWeight: '600' }}>{item.name}</span>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.typography}>CHF {item.price}</Typography>
                </div>
                <Typography variant='body2' className={classes.typography}>{item.description.substr(0, item.description.indexOf('.'))}</Typography>
                {/*<Typography variant='subtitle1' className={classes.typography}>
                <i className='fas fa-truck'></i>
    Free Shipping</Typography>*/}
                </Link>
                </div>
        </div>
    )
}

export default Accessories


// import React from 'react'
// import './Bed.css'
// import Rating from '../rating/Rating'
// import {Link} from 'react-router-dom'

// const Bed = ({bed}) => {
//     console.log(bed)
    
//     return (
//         <div className='sofa_container'>
//             <div className='sofa_card'>
//                 <div className="sofa_imagewrapper">
//                     <img className='sofa_img' src={bed.image} alt={bed.name} />
//                 </div>

//                 <div className="sofa_info">
//                 <Link to={`/product/${bed._id}`}><h3>{bed.name}</h3></Link>
                    
//                     <div className="sofa_price_wrapper">
//                         <h3>CHF {bed.price}</h3>
//                         <Rating value={bed.rating} text={`${bed.numReviews}reviews`} />
//                     </div>

//                     <p className='shipping'>Free Shipping</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Bed