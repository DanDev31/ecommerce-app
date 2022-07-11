import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [],
    subTotal:0
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
            const subTotal = state.cart.reduce((acum, current) => acum + current.total,0)
            state.subTotal = subTotal

            localStorage.setItem('user_cart', JSON.stringify(state.cart))
        },
        setAddQuantity(state, {payload}){
            const product = state.cart.find(item => item.id === payload)
        
            if(product){

                product.quantity += 1
                product.total += product.price
                state.subTotal += product.price
                
            }

        },
        setSubstractQuantity(state, {payload}){
            const product = state.cart.find(item => item.id === payload)
        
            if(product && product.quantity > 1){

                product.quantity -= 1
                product.total -= product.price
                state.subTotal -= product.price
                
            }

        },
        deleteProduct(state, {payload}){
            state.cart = state.cart.filter(product => product.id !== payload)
            localStorage.setItem('user_cart', JSON.stringify(state.cart))
            const subTotal = state.cart.reduce((acum, current) => acum + current.total,0)
            state.subTotal = subTotal

        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer