import { loginFailure, loginSuccess } from "./user/userSlice"
import axios from "axios"

export const login = async(dispatch, user) =>{
    try {
        const res = await axios.post('/users/login', user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}