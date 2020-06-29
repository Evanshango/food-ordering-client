import * as actions from "../types"

export const fetchCartItems = cartItems => {
    return{
        type: actions.FETCH_CART_ITEMS,
        payload: cartItems
    }
}

export const addToCart = cartItem => {
    return {
        type: actions.ADD_ITEM_TO_CART,
        payload: cartItem
    }
}

export const updateCartItem = item => {
    return {
        type: actions.UPDATE_CART_UNITS,
        payload: item
    }
}

export const removeCartItem = itemId => {
    return {
        type: actions.DELETE_CART_ITEM,
        payload: itemId
    }
}
