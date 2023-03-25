import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios";

export const fetchGoogleUser = createAsyncThunk(
  "googleUser/fetchGoogleUser",
  async () => {
    try {
      const { data } = await axiosInstance.get("/users/login/success", {
        method: "GET",
        withCredentials: true,
      });
      return data.user;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  user: null,
  googleUser: null,
  isLogged: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess(state, { payload }) {
      state.user = payload;
      state.isLogged = true;
    },
    logout(state) {
      if (state.googleUser) {
        window.open("/users/logout", "_self");
      } else {
        state.user = null;
        state.isLogged = false;
      }
    },
    loginFailure(state) {
      state.error = true;
    },
  },
  extraReducers: {
    [fetchGoogleUser.pending]: (state) => {
      state.status = "pending";
    },
    [fetchGoogleUser.fulfilled]: (state, { payload }) => {
      state.status = "fulfilled";
      state.googleUser = payload;
    },
    [fetchGoogleUser.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export const { loginSuccess, logout, loginFailure, createOrder } =
  userSlice.actions;
export default userSlice.reducer;
