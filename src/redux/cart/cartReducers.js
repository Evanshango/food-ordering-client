import * as actions from "../types"

const initialState = {
    loading: false,
    cart: [],
    error: ''
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_CART_ITEMS:
            return {
                ...state, cart: action.payload
            }
        case actions.ADD_ITEM_TO_CART:
            const {cart} = state
            const item = action.payload
            const existingItemIndex = findItemIndex(cart, item.id)
            if (existingItemIndex < 0) {
                localStorage.setItem("cartItems", JSON.stringify([...cart, item]))
            }
            return {
                ...state, cart: existingItemIndex >= 0 ? updateItemUnits(cart, item) : [
                    ...cart, item
                ]
            }
        case actions.DELETE_CART_ITEM:
            console.log(`${action.payload} deleted`)
            return {
                ...state
            }
        case actions.UPDATE_CART_UNITS:
            const exItemIndex = findItemIndex(state.cart, action.payload.id)
            if (exItemIndex >= 0) {
                let cartItem = state.cart[exItemIndex]
                state.cart[exItemIndex] = {
                    ...cartItem, units: action.payload.units, subTotal: action.payload.units * cartItem.price
                }
            }
            localStorage.setItem('cartItems', JSON.stringify([...state.cart]))
            return {
                ...state, cart: [...state.cart]
            }
        default:
            return state
    }
}

const findItemIndex = (cart, itemId) => {
    return cart.findIndex(item => item.id === itemId)
}

const updateItemUnits = (cart, item) => {
    const itemIndex = findItemIndex(cart, item.id)
    const updatedItems = [...cart]
    const existingItem = updatedItems[itemIndex]
    updatedItems[itemIndex] = {
        ...existingItem, units: existingItem.units + item.units, subTotal: (existingItem.units + 1) * item.price
    }
    localStorage.setItem("cartItems", JSON.stringify(updatedItems))
    return updatedItems
}

export default cartReducers
