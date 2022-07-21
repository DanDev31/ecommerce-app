import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../redux/cart/cartSlice";
import categoriesSlice from "../redux/categories/categories";
import filterBrandSlice from "../redux/products/filterBrandSlice";
import latestProductsSlice from "../redux/products/latestProductsSlice";
import productDetailSlice from "../redux/products/productDetail";
import productsByCategorySlice from "../redux/products/productsByCategorySlice";
import searchBarSlice from "../redux/products/searchBarSlice";
import searchProductCopy from "../redux/products/searchProductCopy";
import userSlice from "../redux/user/userSlice";

//Redux Persist State

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'


  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, userSlice)


export const store = configureStore({
    reducer:{
        latestProducts: latestProductsSlice,
        productsByCategory:productsByCategorySlice,
        productDetail:productDetailSlice,
        searchBar:searchBarSlice,
        searchProductCopy: searchProductCopy,
        categories:categoriesSlice,
        fitlerByBrand:filterBrandSlice,
        cart:cartSlice,
        user:persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export let persistor = persistStore(store)