import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../redux/cart/cartSlice";
import categoriesSlice from "../redux/categories/categories";
import filterBrandSlice from "../redux/products/filterBrandSlice";
import latestProductsSlice from "../redux/products/latestProductsSlice";
import productDetailSlice from "../redux/products/productDetail";
import productsByCategorySlice from "../redux/products/productsByCategorySlice";
import searchBarSlice from "../redux/products/searchBarSlice";
import searchProductCopy from "../redux/products/searchProductCopy";


export const store = configureStore({
    reducer:{
        latestProducts: latestProductsSlice,
        productsByCategory:productsByCategorySlice,
        productDetail:productDetailSlice,
        searchBar:searchBarSlice,
        searchProductCopy: searchProductCopy,
        categories:categoriesSlice,
        fitlerByBrand:filterBrandSlice,
        cart:cartSlice
    }
})