import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "data",
  initialState: {
    products: [],
  },
  reducers: {
    passProducts: (state, action) => {
      console.log((state.products = action.payload));
    },
  },
});
export default productSlice.reducer;
export const { passProducts } = productSlice.actions;
