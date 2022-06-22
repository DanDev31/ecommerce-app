import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProductsByCategory = createAsyncThunk('productsByCategory/fetchProductsByCategory',
    async(savedCategory)=>{
        try {
            const response = await axios.get(`http://localhost:3001/products/?category=${savedCategory}`)
            return response.data
        } catch (error) {
            console.log('Fail fetching data')
        }
    }
)

const initialState = {
    productsByCategory:[]
}

const produtsByCategorySlice= createSlice({
    name:"productsByCategory",
    initialState,
    extraReducers:{
        [fetchProductsByCategory.pending]: (state)=>{
            state.status = "pending"
        },
        [fetchProductsByCategory.fulfilled]: (state, {payload})=>{
            state.status = "fulfilled"
            state.productsByCategory = payload
        },
        [fetchProductsByCategory.rejected]: (state)=>{
            state.status = "rejected"
        }
    }
})


export default produtsByCategorySlice.reducer