import { createSlice } from "@reduxjs/toolkit";


export const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        isLoading: false,
        error: ''
    },
    reducers: {

        loadingProducts(state)  {
       
            state.isLoading = true;

        },

        errorProducts(state, action){

            state.isLoading = action.payload.loading;
            state.error = action.payload.error;
          
        },

        setProducts(state, action){
            state.isLoading = action.payload.loading;
            state.products = action.payload.products
        },
    }
});

export const  { loadingProducts, errorProducts , setProducts } = ProductSlice.actions;
