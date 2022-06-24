import { configureStore } from "@reduxjs/toolkit";
import latestProductsSlice from "../redux/products/latestProductsSlice";
import productDetailSlice from "../redux/products/productDetail";
import productsByCategorySlice from "../redux/products/productsByCategorySlice";


export const store = configureStore({
    reducer:{
        latestProducts: latestProductsSlice,
        productsByCategory:productsByCategorySlice,
        productDetail:productDetailSlice
    }
})