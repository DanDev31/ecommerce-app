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
        loginFailure(state){
            state.error = true
        }
    }
})

export const { loginSuccess, loginFailure } = userSlice.actions
export default userSlice.reducer
