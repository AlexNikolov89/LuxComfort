import React from 'react'
import Rating from '../rating/Rating'
import {Link} from 'react-router-dom'
import { useStyles } from './styles'
import { Typography } from '@material-ui/core'


const Bed = ({bed}) => {
    const classes = useStyles()
    return (
        <div className={classes.bed}>
            <div style={{ width: '100%' }}>
            <Link to={`/product/${bed._id}`} style={{ textDecoration: 'none'}}>
                <img className={classes.image} src={bed.image} alt={bed.name} />
                    
                <div className={classes.price}>
                    <Typography variant='subtitle1' className={classes.typography}>
                        <span style={{ fontWeight: '600' }}>{bed.name}</span>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.typography}>CHF {bed.price}</Typography>
                </div>
                <Typography variant='body2' className={classes.typography}>{bed.description.substr(0, bed.description.indexOf('.'))}</Typography>
                {/*<Typography variant='subtitle1' className={classes.typography}>
                <i className='fas fa-truck'></i>
    Free Shipping</Typography>*/}
                </Link>
                </div>
        </div>
    )
}

export default Bed


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