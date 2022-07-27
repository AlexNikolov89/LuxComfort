import { Box, Button, Container, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/actions/productActions'
import Product from '../product/Product'
import {useStyles} from './styles'

const AllProducts = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [visible, setVisible] = useState(3)

    const getAllProductsReducer = useSelector(state => state.getAllProductsReducer)
    const {loading, products, error} = getAllProductsReducer

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    const accessories = products?.filter(accessory => {
        return accessory.category.includes('Accessories')
    })

    const showMore = () => {
        setVisible(prevValue => prevValue + 3)
    }

    return (
        <Container maxWidth='md'>
        <Box>
            <Grid container columnspacing={{ xs: 1, sm: 2, md: 3, lg: '3'}} style={{ justifyContent: 'center'  }}>
                {accessories?.slice(0, visible).map((product, index) => {
                    return <Product product={product} key={index} />
                })}
            </Grid>
            <div style={{ justifyContent: 'center', alignItems: 'center', margin: '30px 40%' }}>
                <Button className={classes.button} onClick={showMore}>Show More</Button>
            </div>
        </Box>
        </Container>
    )
}

export default AllProducts
