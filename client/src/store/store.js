import { configureStore } from "@reduxjs/toolkit";
import latestProductsSlice from "../redux/products/latestProductsSlice";
import productsByCategorySlice from "../redux/products/productsByCategorySlice";
import searchBarSlice from "../redux/products/searchBarSlice";


export const store = configureStore({
    reducer:{
        latestProducts: latestProductsSlice,
        productsByCategory:productsByCategorySlice,
        searchBar:searchBarSlice,
    }
})