import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProductsByCategory = createAsyncThunk('productsByCategory/fetchProductsByCategory',
    async({savedCategory, queriesArray})=>{
        try {
            if(queriesArray === undefined || queriesArray.length === 0){
                const response = await axios.get(`/products/?category=${savedCategory}`)
                return response.data
            }else{
                if(queriesArray.length > 0){
                    let hasFalseValue = queriesArray.every(element => element.isCheck === true)
                    if(hasFalseValue) {
        
                        const response = await axios.get(`/products/?category=${savedCategory}&${
                            queriesArray.map(brand => `brandValue=${brand.brandValue}`).join("&")
                        }`)
        
                        return response.data  
                    } else{
                        let onlyTrueValues = queriesArray.filter(element => element.isCheck === true)
                        if(onlyTrueValues.length > 0){
        
                            const response = await axios.get(`/products/?category=${savedCategory}&${
                                onlyTrueValues.map(brand => `brandValue=${brand.brandValue}`).join("&")
                            }`)
                            return response.data 
                        }else{
                            const response = await axios.get(`/products/?category=${savedCategory}`)
                            return response.data
                        }
        
                    }
                }
            }
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
    reducers:{
        orderByPrice(state, {payload}){
            if(payload === 'low'){
                state.productsByCategory = state.productsByCategory.sort(function (a, b) {

                        if (a.price > b.price) {
                          return 1;
                        }
                        if (a.price < b.price) {
                          return -1;
                        }
                          return 0;
                      })
            }

            if(payload === 'high'){
                state.productsByCategory = state.productsByCategory.sort(function (a, b) {
                    if (a.price > b.price) {
                      return 1;
                    }
                    if (a.price < b.price) {
                      return -1;
                    }
                      return 0;
                  }).reverse()
            }
        }
    },
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

export const produtsByCategoryActions = produtsByCategorySlice.actions
export default produtsByCategorySlice.reducer