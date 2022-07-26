import React, { useEffect } from 'react'
import { useStyles } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../../store/actions/productActions'
import { Container, Grid, Typography } from '@material-ui/core'
import Outhdoor from '../../components/outdoors/Outdoor'



const Outdoorspage = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    //const [products, setProducts] = useState([])

    const getAllProductsReducer = useSelector(state => state.getAllProductsReducer)
    const {loading, products, error} = getAllProductsReducer;

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    console.log(products)
    const outhdoorsFurniture = products.filter(product => {
        return product.category.includes('Outdoor')
    })
    //console.log(sofas)
    
    return (
        <Container maxWidth='lg'>
        <div className={classes.outdoorspage}>
            <Typography gutterBottom={true} className={classes.title} variant='h4'>Lamps ({outhdoorsFurniture.length} Articles)</Typography>     

            <Typography variant='subtitle1' className={classes.text}>The patio is the perfect place for relaxation. Whether with a drink by your side or in company of loved ones, your outdoor should be a haven of good times. So start upgrading your outdoor area with contemporary lounge furniture.</Typography>

            
            <Grid container className={classes.gridContainer}>
            {outhdoorsFurniture.map((outdoor, id) => {
                return (
                    <Outhdoor key={id} outdoor={outdoor} />)
            })}
            </Grid>
           
        </div>
        </Container>
    )
}

export default Outdoorspage