import React, { useEffect } from 'react'
import { useStyles } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../../store/actions/productActions'
import { Container, Grid, Typography } from '@material-ui/core'
import Table from '../../components/table/Table'

const Tablespage = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    //const [products, setProducts] = useState([])

    const getAllProductsReducer = useSelector(state => state.getAllProductsReducer)
    const {loading, products, error} = getAllProductsReducer;

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    const tables = products?.filter(product => {
        return product.category.includes('Tables')
    })
    //console.log(sofas)
    
    return (
        <Container maxWidth='lg'>
        <div className={classes.tablespage}>
            <Typography gutterBottom={true} className={classes.title} variant='h4'>Tables ({tables?.length} Articles)</Typography>     

            <Typography variant='subtitle1' className={classes.text}>Whether it’s an intimate meal for two or a feast for the whole family, the right dining table for the occasion is crucial. Simple and sleek or adjustable and extendable, you can find your perfect table right here.</Typography>

            
            <Grid container className={classes.gridContainer}>
            {tables?.map((table, id) => {
                return (
                    <Table key={id} table={table} />)
            })}
            </Grid>
           
        </div>
        </Container>
    )
}

export default Tablespage
