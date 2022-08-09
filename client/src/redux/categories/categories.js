import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCategories = createAsyncThunk('categories/fetchCategories',
    async()=>{
        try {
            const response = await axios.get('/categories')
            return response.data
        } catch (error) {
            console.log('Fail fetching data')
        }
    }
)

const initialState = {
    categories:[]
}

const categoriesSlice = createSlice({
    name:"categories",
    initialState,
    extraReducers:{
        [fetchCategories.pending]: (state)=>{
            state.status = "pending"
        },
        [fetchCategories.fulfilled]: (state, {payload})=>{
            state.status = "fulfilled"
            state.categories = payload
        },
        [fetchCategories.rejected]: (state)=>{
            state.status = "rejected"
        }
    }
})


export default categoriesSlice.reducer