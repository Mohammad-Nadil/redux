import { createSlice } from "@reduxjs/toolkit";
import productsData from "../productsData";

const initialState = {
  addToCart: [],
  allProduct: productsData,
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        state.addToCart.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
