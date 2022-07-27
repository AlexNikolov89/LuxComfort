import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../../store/actions/productActions'
import Chair from '../../components/chair/Chair'
import { useStyles } from './style'
import { Container, Grid, Typography } from '@material-ui/core'


const Chairspage = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const getAllProductsReducer = useSelector(state => state.getAllProductsReducer)
    const {loading, products, error} = getAllProductsReducer;

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    const chairs = products?.filter(product => {
        return product.category.includes('Dining Chairs')
    })
    
    return (
        <Container maxWidth='lg'>
        <div className={classes.chairspage}>
            <Typography gutterBottom={true} className={classes.title} variant='h4'>Chairs ({chairs?.length} Articles)</Typography>     
            {/*<SofaCategories /> */}
            <Typography  variant='subtitle1' className={classes.text}>For sharing stories and sparking conversation around great food, friends and family. Get up close and personal in our comfortable dining chairs designed to transform your living space.</Typography>

            <Grid container className={classes.gridContainer}>
            {chairs?.map(chair => {
                return <Chair key={chair._id} chair={chair} />
            })}
            </Grid>
           
        </div>
        </Container>
    )
}

export default Chairspage


// import React, { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { getAllProducts } from '../../store/actions/productActions'
// import './Chairspage.css'
// import Chair from '../../components/chair/Chair'


// const Chairspage = () => {
//     const dispatch = useDispatch()

//     const getAllProductsReducer = useSelector(state => state.getAllProductsReducer)
//     const {loading, products, error} = getAllProductsReducer;

//     useEffect(() => {
//         dispatch(getAllProducts())
//     }, [dispatch])

//     console.log(products)
//     const chairs = products.filter(product => {
//         return product.category.includes('Dining Chairs')
//     })
//     console.log(chairs)
    
//     return (
//         <div className='sofaspage_container'>
//         <h1>Chairs ({chairs.length} Articles)</h1>

//             <div className='sofaspage_text'>
//                 <h3 className='text'>A wild mess? Not even close. On this page we have not only listed a lot of pretty furniture that you can find inspiration by scrolling through. Below you will also find some great tips on how to find the perfect furniture for you.</h3>
//             </div>
//             <div className="sofaspage_card">
//             {chairs.map(chair => {
//                 return <Chair key={chair._id} chair={chair} />
//             })}
//             </div>
           
//         </div>
//     )
// }

// export default Chairspage