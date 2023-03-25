import { loginFailure, loginSuccess } from "./user/userSlice";
import { axiosInstance } from "../axios";

export const login = async (dispatch, user) => {
  try {
    const res = await axiosInstance.post("/users/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
