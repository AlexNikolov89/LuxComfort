import { Container, Grid, Typography } from '@material-ui/core'
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Accessories from '../../components/accessories/Accessories'
import Bed from '../../components/bed/Bed'
import Sofa from '../../components/sofa/Sofa'
import { getAllProducts } from '../../store/actions/productActions'
import { useStyles } from './style'

const Accessoriespage = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const getAllProductsReducer = useSelector(state => state.getAllProductsReducer)
    const {loading, products, error} = getAllProductsReducer;

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    const accessories = products?.filter(product => {
        return product.category.includes('Accessories')
    })
    
    return (
        <Container maxWidth='lg'>
        <div className={classes.accessoriespage}>
            <Typography gutterBottom={true} className={classes.title} variant='h4'>Accessories ({accessories?.length} Articles)</Typography>     
            {/*<SofaCategories /> */}
            <Typography gutterBottom={true} variant='subtitle2' className={classes.text}>Your home is an expression of you. Start expressing yourself with stylish forms of decorations and create a home filled with magical and meaningful features. Take a look at these decorations. What can they do for you?</Typography>

            <Grid container spacing={3} className={classes.gridContainer}>
            {accessories?.map((item, id) => {
                return <Accessories key={id} item={item} />
            })}
            </Grid>
           
        </div>
        </Container>
    )
}

export default Accessoriespage