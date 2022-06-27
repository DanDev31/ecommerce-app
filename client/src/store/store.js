import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../redux/categories/categories";
import filterBrandSlice from "../redux/products/filterBrandSlice";
import latestProductsSlice from "../redux/products/latestProductsSlice";
import productDetailSlice from "../redux/products/productDetail";
import productsByCategorySlice from "../redux/products/productsByCategorySlice";
import searchBarSlice from "../redux/products/searchBarSlice";


export const store = configureStore({
    reducer:{
        latestProducts: latestProductsSlice,
        productsByCategory:productsByCategorySlice,
        productDetail:productDetailSlice,
        searchBar:searchBarSlice,
        categories:categoriesSlice,
        fitlerByBrand:filterBrandSlice
    }
})