import axios from 'axios'
import {fetchCategoriesError, fetchCategoriesRequest, fetchCategoriesSuccess} from "../redux/category/categoryActions"
import {
    fetchAllProductsFailure, fetchAllProductsRequest, fetchAllProductsSuccess
} from "../redux/allProducts/allProductsActions"
import {
    fetchProductsFailure, fetchProductsRequest, fetchProductsSuccess
} from "../redux/products/productActions"
import {
    fetchSubProductsFailure,
    fetchSubProductsRequest,
    fetchSubProductsSuccess
} from "../redux/subProducts/subProductActions"
import {addToCart, fetchCartItems, removeCartItem} from "../redux/cart/cartActions"

export const getCategories = () => {
    return (dispatch) => {
        dispatch(fetchCategoriesRequest(true))
        axios.get('/categories').then(response => {
            dispatch(fetchCategoriesSuccess(response.data))
        }).catch(error => {
            dispatch(fetchCategoriesError(error.message))
        })
    }
}

export const getAllProducts = () => {
    return (dispatch) => {
        dispatch(fetchAllProductsRequest(true))
        axios.get('/products').then(response => {
            dispatch(fetchAllProductsSuccess(response.data))
        }).catch(error => {
            dispatch(fetchAllProductsFailure(error.message))
        })
    }
}

export const getCategoryProducts = categoryId => {
    return (dispatch) => {
        dispatch(fetchProductsRequest(true))
        axios.get(`/category/${categoryId}/products`).then(response => {
            dispatch(fetchProductsSuccess(response.data))
        }).catch(error => {
            dispatch(fetchProductsFailure(error.message))
        })
    }
}

export const getSubProducts = productId => {
    return (dispatch) => {
        dispatch(fetchSubProductsRequest(true))
        axios.get(`/product/${productId}/sub-products`).then(response => {
            dispatch(fetchSubProductsSuccess(response.data))
        }).catch(error => {
            dispatch(fetchSubProductsFailure(error.message))
        })
    }
}

export const fetchCart = cartItems => {
    return (dispatch) => {
        dispatch(fetchCartItems(cartItems))
    }
}

export const addItemToCart = cartItem => {
    return (dispatch) => {
        dispatch(addToCart(cartItem))
    }
}

export const deleteCartItem = itemId => {
    return (dispatch) => {
        dispatch(removeCartItem(itemId))
    }
}
