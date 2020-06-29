import * as actions from "../types"

const initialState = {
    loading: false,
    products: [],
    error: ''
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_CATEGORY_PRODUCTS_REQUEST:
            return {
                ...state, loading: true
            }
        case actions.FETCH_CATEGORY_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                error: ''
            }
        case actions.FETCH_CATEGORY_PRODUCTS_FAILURE:
            return {
                loading: false,
                products: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default productsReducer
