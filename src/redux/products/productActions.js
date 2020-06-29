import * as actions from '../types'

export const fetchProductsRequest = bool => {
    return{
        type: actions.FETCH_CATEGORY_PRODUCTS_REQUEST,
        payload: bool
    }
}

export const fetchProductsSuccess = products => {
    return{
        type: actions.FETCH_CATEGORY_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProductsFailure = error => {
    return{
        type: actions.FETCH_CATEGORY_PRODUCTS_FAILURE,
        payload: error
    }
}
