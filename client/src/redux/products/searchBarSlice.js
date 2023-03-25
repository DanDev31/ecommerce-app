import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios";

export const fetchSearchedProduct = createAsyncThunk(
  "searchedProducts/fetchSearchedProduct",
  async ({ search, queriesArray }) => {
    try {
      if (queriesArray === undefined || queriesArray.length === 0) {
        const response = await axiosInstance.get(`/products/?search=${search}`);
        return response.data;
      } else {
        if (queriesArray.length > 0) {
          let hasFalseValue = queriesArray.every(
            (element) => element.isCheck === true
          );
          if (hasFalseValue) {
            const response = await axiosInstance.get(
              `/products/?search=${search}&${queriesArray
                .map((brand) => `brandValue=${brand.brandValue}`)
                .join("&")}`
            );
            return response.data;
          } else {
            let onlyTrueValues = queriesArray.filter(
              (element) => element.isCheck === true
            );
            if (onlyTrueValues.length > 0) {
              const response = await axiosInstance.get(
                `/products/?search=${search}&${onlyTrueValues
                  .map((brand) => `brandValue=${brand.brandValue}`)
                  .join("&")}`
              );
              return response.data;
            } else {
              const response = await axiosInstance.get(
                `/products/?search=${search}`
              );
              return response.data;
            }
          }
        }
      }
    } catch (error) {
      console.log("Fail fetching data");
    }
  }
);

const initialState = {
  searchedProducts: [],
};

const searchBarSlice = createSlice({
  name: "searchedProducts",
  initialState,
  extraReducers: {
    [fetchSearchedProduct.pending]: (state) => {
      state.status = "pending";
    },
    [fetchSearchedProduct.fulfilled]: (state, { payload }) => {
      state.status = "fulfilled";
      state.searchedProducts = payload;
    },
    [fetchSearchedProduct.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default searchBarSlice.reducer;
