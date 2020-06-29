import * as actions from '../types'

export const fetchSubProductsRequest = bool => {
    return{
        type: actions.FETCH_SUB_PRODUCTS_REQUEST,
        payload: bool
    }
}

export const fetchSubProductsSuccess = subProducts => {
    return{
        type: actions.FETCH_SUB_PRODUCTS_SUCCESS,
        payload: subProducts
    }
}

export const fetchSubProductsFailure = error => {
    return{
        type: actions.FETCH_SUB_PRODUCTS_FAILURE,
        payload: error
    }
}
