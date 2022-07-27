import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: JSON.parse(localStorage.getItem("cartItems") || "[]"),
    total: 0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addProduct(state, {payload}){

            let alreadyExists = false
            state.cart.forEach(item => {
                if(item.id === payload.id){
                    alreadyExists = true
                    item.quantity++
                    state.total = state.cart.reduce((acum, current) => acum + (current.price * current.quantity), 0)
                }
                
            });
            if(!alreadyExists){
                state.cart.push({...payload, quantity:1})
                state.total = state.cart.reduce((acum, current) => acum + (current.price * current.quantity), 0)
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cart))
            localStorage.setItem("cartTotal", state.total)

        },
        setAddQuantity(state, {payload}){
            const cartItems = [...state.cart]
            const product = cartItems.find(item => item.id === payload)
            if(product){
                product.quantity += 1
                state.total = state.cart.reduce((acum, current) => acum + (current.price * current.quantity), 0)
                localStorage.setItem('cartItems', JSON.stringify(cartItems))
                localStorage.setItem("cartTotal", state.total)
            }
            

        },
        setSubstractQuantity(state, {payload}){
            const cartItems = [...state.cart]
            const product = cartItems.find(item => item.id === payload)
            if(product){
                if(product.quantity > 1){

                    product.quantity -= 1
                    state.total = state.cart.reduce((acum, current) => acum + (current.price * current.quantity), 0)
                    localStorage.setItem('cartItems', JSON.stringify(cartItems))
                    localStorage.setItem("cartTotal", state.total)
                }
            }
            

        },
        deleteProduct(state, {payload}){
            state.cart = state.cart.filter(product => product.id !== payload)
            state.total = state.cart.reduce((acum, current) => acum + (current.price * current.quantity), 0)
            localStorage.setItem('cartItems', JSON.stringify(state.cart))
            localStorage.setItem("cartTotal", state.total)
        
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer