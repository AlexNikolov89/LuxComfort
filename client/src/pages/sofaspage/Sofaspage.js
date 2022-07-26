import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Sofa from '../../components/sofa/Sofa'
import { getAllProducts } from '../../store/actions/productActions'
import { useStyles } from './style'
import { Card, Container, Grid, Toolbar, Typography } from '@material-ui/core'
import SofaCategories from '../../components/sofa/SofaCategories'


const Sofaspage = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    //const [products, setProducts] = useState([])

    const getAllProductsReducer = useSelector(state => state.getAllProductsReducer)
    const {loading, products, error} = getAllProductsReducer;

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    console.log(products)
    const sofas = products.filter(product => {
        return product.category.includes('Sofa')
    })
    //console.log(sofas)
    
    return (
        <Container maxWidth='lg'>
        <div className={classes.sofaspage}>
            <Typography gutterBottom={true} className={classes.title} variant='h4'>Sofas ({sofas.length} Articles)</Typography>     
            {/*<SofaCategories /> */}
            <Typography variant='subtitle1' className={classes.text}>Space. Space to relax. Space to enjoy. Space to snuggle. Space to stretch. Space to invite. Give yourself the space you need with one of our sofas.</Typography>

            
            <Grid container className={classes.gridContainer}>
            {sofas.map((sofa, id) => {
                return (
                    <Sofa key={id} sofa={sofa} />)
            })}
            </Grid>
           
        </div>
        </Container>
    )
}

export default Sofaspage
