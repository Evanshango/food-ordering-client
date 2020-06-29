import * as actions from "../types"

let initialState = {
    loading: false,
    allProducts: [],
    error: ''
}

const allProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_ALL_PRODUCTS_REQUEST:
            return {
                ...state, loading: true
            }
        case actions.FETCH_ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                allProducts: action.payload,
                error: ''
            }
        case actions.FETCH_ALL_PRODUCTS_FAILURE:
            return {
                loading: false,
                products: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default allProductsReducer
