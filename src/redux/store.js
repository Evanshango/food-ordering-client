import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from 'redux-thunk'
import categoryReducer from "./category/categoryReducer"
import allProductsReducer from "./allProducts/allProductsReducer"
import productsReducer from "./products/productsReducer"
import subProductsReducer from "./subProducts/subProductsReducer"
import cartReducers from "./cart/cartReducers"

const initialState = {}
const middleware = [thunk]

const rootReducer = combineReducers({
    categoryData: categoryReducer,
    allProductData: allProductsReducer,
    productData: productsReducer,
    subProductData: subProductsReducer,
    cartData: cartReducers,
})

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
