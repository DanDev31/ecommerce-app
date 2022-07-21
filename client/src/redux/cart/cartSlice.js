import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: JSON.parse(localStorage.getItem("cartItems") || "[]")
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addProduct(state, {payload}){
        
            // const cartItems = [...state.cart]

            let alreadyExists = false
            state.cart.forEach(item => {
                if(item.id === payload.id){
                    alreadyExists = true
                    item.quantity++
                }
                
            });
            if(!alreadyExists){
                state.cart.push({...payload, quantity:1})
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cart))

            
        },
        setAddQuantity(state, {payload}){
            const cartItems = [...state.cart]
            const product = cartItems.find(item => item.id === payload)
            if(product){
                product.quantity += 1
                localStorage.setItem('cartItems', JSON.stringify(cartItems))
            }
            

        },
        setSubstractQuantity(state, {payload}){
            const cartItems = [...state.cart]
            const product = cartItems.find(item => item.id === payload)
            if(product){
                product.quantity -= 1
                localStorage.setItem('cartItems', JSON.stringify(cartItems))
            }
            

        },
        deleteProduct(state, {payload}){
            state.cart = state.cart.filter(product => product.id !== payload)
            localStorage.setItem('cartItems', JSON.stringify(state.cart))
        
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer