import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Sofa from '../../components/sofa/Sofa'
import { getAllProducts } from '../../store/actions/productActions'
import './Sofaspage.css'


const Sofaspage = () => {
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
        <div className='sofaspage_container'>
        <h1>Sofas ({sofas.length} Articles)</h1>

            <div className='sofaspage_text'>
                <h3 className='text'>A wild mess? Not even close. On this page we have not only listed a lot of pretty furniture that you can find inspiration by scrolling through. Below you will also find some great tips on how to find the perfect furniture for you.</h3>
            </div>
            <div className="sofaspage_card">
            {sofas.map(sofa => {
                return <Sofa key={sofa.id} sofa={sofa} />
            })}
            </div>
           
        </div>
    )
}

export default Sofaspage
