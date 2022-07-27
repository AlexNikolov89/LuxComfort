import React, { useEffect } from 'react'
import { useStyles } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../../store/actions/productActions'
import { Container, Grid, Typography } from '@material-ui/core'
import Light from '../../components/light/Light'


const Lighteningpage = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    //const [products, setProducts] = useState([])

    const getAllProductsReducer = useSelector(state => state.getAllProductsReducer)
    const {loading, products, error} = getAllProductsReducer;

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    const lightening = products?.filter(product => {
        return product.category.includes('Lightening')
    })
    //console.log(sofas)
    
    return (
        <Container maxWidth='lg'>
        <div className={classes.lighteningpage}>
            <Typography gutterBottom={true} className={classes.title} variant='h4'>Lamps ({lightening?.length} Articles)</Typography>     

            <Typography variant='subtitle1' className={classes.text}>Don’t just sit there in the dark, let there be light! From floor lamps to wall lamps, table lamps to pendants, we’ve got a lamp for every room and situation.</Typography>

            
            <Grid container className={classes.gridContainer}>
            {lightening?.map((light, id) => {
                return (
                    <Light key={id} light={light} />)
            })}
            </Grid>
           
        </div>
        </Container>
    )
}

export default Lighteningpage