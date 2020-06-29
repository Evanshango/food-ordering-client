import * as actions from "../types"

export const fetchAllProductsRequest = bool => {
    return {
        type: actions.FETCH_ALL_PRODUCTS_REQUEST,
        payload: bool
    }
}

export const fetchAllProductsSuccess = products => {
    return {
        type: actions.FETCH_ALL_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const  fetchAllProductsFailure = error => {
    return {
        type: actions.FETCH_ALL_PRODUCTS_FAILURE,
        payload: error
    }
}
