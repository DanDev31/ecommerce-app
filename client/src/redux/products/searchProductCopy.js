import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchSearchProductCopy = createAsyncThunk('searchProductsCopy/fetchSearchProductCopy', 
    async(search) =>{
        try {
            const response = await axios.get(`/products/?search=${search}`)
            return response.data
        } catch (error) {
            console.log('Fail fetching data')
        }
})

const initialState = {
    searchProductsCopy:[]
}

const searchProductsCopySlice = createSlice({
    name:"searchProductsCopy",
    initialState,
    extraReducers:{
        [fetchSearchProductCopy.pending]:(state)=>{
            state.status = "pending"
        },
        [fetchSearchProductCopy.fulfilled]:(state,{payload})=>{
            state.status = "fulfilled"
            state.searchProductsCopy = payload
        },
        [fetchSearchProductCopy.rejected]:(state)=>{
            state.status = "rejected"
        }
    }
})

export default searchProductsCopySlice.reducer