import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchByBrand = createAsyncThunk('productsByBrand/fetchByBrand', async(savedCategory)=>{
    try {
        const response = await axios.get(`http://localhost:3001/products/?category=${savedCategory}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
})


const initialState = {
    productsByBrand:[]
}

const filterByBrandSlice = createSlice({
    name: 'productsByBrand',
    initialState,
    extraReducers:{
        [fetchByBrand.pending]:(state)=>{
           state.status = 'pending'     
        },
        [fetchByBrand.fulfilled]:(state, {payload})=>{
           state.status = 'fulfilled'
           state.productsByBrand = payload
        },
        [fetchByBrand.rejected]:(state)=>{
           state.status = 'rejected'     
        },
    }
})

export default filterByBrandSlice.reducer