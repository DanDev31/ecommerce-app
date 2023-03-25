import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios";

export const fetchProductDetail = createAsyncThunk(
  "productDetail/fetchProductDetail",
  async (id) => {
    try {
      const response = await axiosInstance.get(`/products/detail/${id}`);
      return response.data;
    } catch (error) {
      console.log("Fail fetching data");
    }
  }
);

const initialState = {
  productDetail: [],
};
const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  extraReducers: {
    [fetchProductDetail.pending]: (state) => {
      state.status = "pending";
    },
    [fetchProductDetail.fulfilled]: (state, { payload }) => {
      state.status = "fulfilled";
      state.productDetail = payload;
    },
    [fetchProductDetail.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default productDetailSlice.reducer;
