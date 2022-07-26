import {
    ADD_TO_CART,
    CART_REMOVE_ITEM
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
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}