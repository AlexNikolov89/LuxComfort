import { Container, Grid, Typography } from '@material-ui/core'
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Bed from '../../components/bed/Bed'
import Sofa from '../../components/sofa/Sofa'
import { getAllProducts } from '../../store/actions/productActions'
import { useStyles } from './style'

const Bedspage = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const getAllProductsReducer = useSelector(state => state.getAllProductsReducer)
    const {loading, products, error} = getAllProductsReducer;

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    const beds = products?.filter(product => {
        return product.category.includes('Beds')
    })
    
    return (
        <Container maxWidth='lg'>
        <div className={classes.bedspage}>
            <Typography gutterBottom={true} className={classes.title} variant='h4'>Beds ({beds?.length} Articles)</Typography>     
            {/*<SofaCategories /> */}
            <Typography gutterBottom={true} variant='subtitle2' className={classes.text}>A wild mess? Not even close. On this page we have not only listed a lot of pretty furniture <br /> that you can find inspiration by scrolling through.</Typography>

            <Grid container spacing={3} className={classes.gridContainer}>
            {beds?.map(bed => {
                return <Bed key={bed.id} bed={bed} />
            })}
            </Grid>
           
        </div>
        </Container>
    )
}

export default Bedspage