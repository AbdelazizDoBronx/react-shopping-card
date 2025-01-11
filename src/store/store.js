import { configureStore } from "@reduxjs/toolkit";

import productsReducer from '../store/productSlice.js'


const store = configureStore({
    reducer : {
        products : productsReducer
    }
})

export default store