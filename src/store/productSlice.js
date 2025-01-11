import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk('products/fetchProducts',async()=>{
    const result = await fetch('https://api.escuelajs.co/api/v1/products')
    const resp = result.json()
    return resp
})



const productsReducer = createSlice({
    name : "products",
    initialState : {
        products : [],
        status : "idle",
        error : null
    },
    extraReducers : (builder) => {
        builder
        .addCase(fetchProducts.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status = 'success'
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })
    }
})

export default productsReducer.reducer