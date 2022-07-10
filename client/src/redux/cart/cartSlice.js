import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addProduct(state, {payload}){
            state.cart = [...state.cart, payload]
            console.log("Me ejecuto")
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer