import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addProduct(state, {payload}){

            let cartItem = {
                ...payload,
                quantity: 1,
                total: payload.price
            }
            state.cart = [...state.cart, cartItem]
        },
        setAddQuantity(state, {payload}){
            const product = state.cart.find(item => item.id === payload)
        
            if(product){

                product.quantity += 1
                product.total += product.price
                
            }
        },
        setSubstractQuantity(state, {payload}){
            const product = state.cart.find(item => item.id === payload)
        
            if(product && product.quantity > 1){

                product.quantity -= 1
                product.total -= product.price
                
            }
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer