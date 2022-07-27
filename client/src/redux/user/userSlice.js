import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user:null,
    isLogged:false,
    error:false
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loginSuccess(state, {payload}){
            state.user = payload
            state.isLogged = true
        },
        logout(state){
            state.user = null
            state.isLogged = false
        },
        loginFailure(state){
            state.error = true
        }
    }
})

export const { loginSuccess, logout, loginFailure } = userSlice.actions
export default userSlice.reducer
