import { configureStore } from "@reduxjs/toolkit";
import latestProductsSlice from "../redux/products/latestProductsSlice";
import productsByCategorySlice from "../redux/products/productsByCategorySlice";


export const store = configureStore({
    reducer:{
        latestProducts: latestProductsSlice,
        productsByCategory:productsByCategorySlice
    }
})