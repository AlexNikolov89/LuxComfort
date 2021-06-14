import {
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAIL,
    GET_PRODUCT_BY_ID_REQUEST,
    GET_PRODUCT_BY_ID_SUCCESS,
    GET_PRODUCT_BY_ID_FAIL
} from './types'
import axios from 'axios'

export const getAllProducts = () => async dispatch => {
    try {
        dispatch({ type: GET_ALL_PRODUCTS_REQUEST })

        const {data} = await axios.get('/products')

        dispatch({
            type: GET_ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_PRODUCTS_FAIL,
            payload: error.message
        })
    }
}

export const getProductById = (id) => async dispatch => {
    try {
        dispatch({ type: GET_PRODUCT_BY_ID_REQUEST })

        const {data} = await axios.get(`/products/${id}`)

        dispatch({
            type: GET_PRODUCT_BY_ID_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_PRODUCT_BY_ID_FAIL,
            payload: error.message
        })
    }
}