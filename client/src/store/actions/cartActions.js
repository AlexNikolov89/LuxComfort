import {
    ADD_TO_CART,
    CART_REMOVE_ITEM
} from './types'

export const addToCart = (product, quantity) => (dispatch, getState) => {
    const cartItem =  {
        id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        countInStock: product.countInStock,
        quantity
    }

    dispatch({
        type: ADD_TO_CART,
        payload: cartItem
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().addToCartReducer.cartItems))
}

export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().addToCartReducer.cartItems))
}