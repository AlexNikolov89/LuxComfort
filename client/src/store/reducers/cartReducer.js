import {
    ADD_TO_CART
} from '../actions/types'

export const addToCartReducer = (state={ cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existItem = state.cartItems.find(item => item._id === action.payload._id)

            if(existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item._id === action.payload._id ? action.payload : item)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }
            }
        default:
            return state;
    }
}