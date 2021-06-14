import {
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAIL,
    GET_PRODUCT_BY_ID_REQUEST,
    GET_PRODUCT_BY_ID_SUCCESS,
    GET_PRODUCT_BY_ID_FAIL
} from '../actions/types'

export const getAllProductsReducer = (state={ products: [] }, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }
        case GET_ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case GET_ALL_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const getProductByIdReducer = (state={ product: {} }, action) => {
    switch (action.type) {
        case GET_PRODUCT_BY_ID_REQUEST:
           return {
            ...state,
            loading: true
           }
        case GET_PRODUCT_BY_ID_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        case GET_PRODUCT_BY_ID_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}