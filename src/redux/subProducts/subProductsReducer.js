import * as actions from "../types"

const initialState = {
    loading: false,
    subProducts: [],
    error: ''
}

const subProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_SUB_PRODUCTS_REQUEST:
            return {
                ...state, loading: true
            }
        case actions.FETCH_SUB_PRODUCTS_SUCCESS:
            return {
                loading: false,
                subProducts: action.payload,
                error: ''
            }
        case actions.FETCH_SUB_PRODUCTS_FAILURE:
            return {
                loading: false,
                subProducts: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default subProductsReducer
