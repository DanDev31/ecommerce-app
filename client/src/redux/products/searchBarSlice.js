import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchSearchedProduct = createAsyncThunk('searchedProducts/fetchSearchedProduct',
    async(search)=>{
        try {
            const response = await axios.get(`http://localhost:3001/products/?search=${search}`)
            return response.data
        } catch (error) {
            console.log('Fail fetching data')
        }
    }
)

const initialState = {
    searchedProducts:[]
}

const searchBarSlice = createSlice({
    name:"searchedProducts",
    initialState,
    extraReducers:{
        [fetchSearchedProduct.pending]: (state)=>{
            state.status = "pending"
        },
        [fetchSearchedProduct.fulfilled]: (state, {payload})=>{
            state.status = "fulfilled"
            state.searchedProducts = payload
        },
        [fetchSearchedProduct.rejected]: (state)=>{
            state.status = "rejected"
        }
    }
})


export default searchBarSlice.reducer