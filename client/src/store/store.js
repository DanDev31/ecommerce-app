import { configureStore } from "@reduxjs/toolkit";
import latestProductsSlice from "../redux/products/latestProductsSlice";


export const store = configureStore({
    reducer:{
        latestProducts: latestProductsSlice
    }
})