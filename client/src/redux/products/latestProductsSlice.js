import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios";

export const fetchLatestProducts = createAsyncThunk(
  "latestProducts/fetchLatestProducts",
  async () => {
    try {
      const response = await axiosInstance.get("/products/latestproducts");
      return response.data;
    } catch (error) {
      console.log("Fail fetching data");
    }
  }
);

const initialState = {
  latestProducts: [],
};

const latestProductsSlice = createSlice({
  name: "latestProducts",
  initialState,
  extraReducers: {
    [fetchLatestProducts.pending]: (state) => {
      state.status = "pending";
    },
    [fetchLatestProducts.fulfilled]: (state, { payload }) => {
      state.status = "fulfilled";
      state.latestProducts = payload;
    },
    [fetchLatestProducts.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default latestProductsSlice.reducer;
