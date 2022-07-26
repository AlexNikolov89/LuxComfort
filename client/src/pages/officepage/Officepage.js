import React, { useEffect } from 'react'
import { useStyles } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../../store/actions/productActions'
import { Container, Grid, Typography } from '@material-ui/core'
import Office from '../../components/office/Office'


const Officepage = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    //const [products, setProducts] = useState([])

    const getAllProductsReducer = useSelector(state => state.getAllProductsReducer)
    const {loading, products, error} = getAllProductsReducer;

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    console.log(products)
    const office = products.filter(product => {
        return product.category.includes('Office')
    })
    //console.log(sofas)
    
    return (
        <Container maxWidth='lg'>
        <div className={classes.officepage}>
            <Typography gutterBottom={true} className={classes.title} variant='h4'>Lamps ({office.length} Articles)</Typography>     

            <Typography variant='subtitle1' className={classes.text}>Add comfort and style to your workplace with an office sofa. Perfect as a reception sofa in the hotel, club or lounge, these modern designs will create the perfect relaxation spot in the corporate space.</Typography>

            
            <Grid container className={classes.gridContainer}>
            {office.map((item, id) => {
                return (
                    <Office key={id} item={item} />)
            })}
            </Grid>
           
        </div>
        </Container>
    )
}

export default Officepage