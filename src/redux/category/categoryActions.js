import * as actions from "../types"

export const fetchCategoriesRequest = (bool) => {
    return {
        type: actions.FETCH_CATEGORIES_REQUEST,
        payload: bool
    }
}

export const fetchCategoriesSuccess = categories => {
    return {
        type: actions.FETCH_CATEGORIES_SUCCESS,
        payload: categories
    }
}

export const fetchCategoriesError = error => {
    return {
        type: actions.FETCH_CATEGORIES_FAILURE,
        payload: error
    }
}
