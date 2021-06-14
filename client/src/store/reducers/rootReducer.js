import {combineReducers} from 'redux'
import { addToCartReducer } from './cartReducer'
import { getAllProductsReducer, getProductByIdReducer } from './productReducer'


export const rootReducer = combineReducers({
    getAllProductsReducer,
    getProductByIdReducer,
    addToCartReducer
})