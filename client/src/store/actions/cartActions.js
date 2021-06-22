import {
    ADD_TO_CART
} from './types'

export const addToCart = (product, quantity) => (dispatch, getState) => {
    const cartItem =  {
        _id: product._id,
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
    console.log(cartItem)

    localStorage.setItem('cartItems', JSON.stringify(getState().addToCartReducer.cartItems))
}