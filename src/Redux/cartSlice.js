import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productNumber: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addProductExists = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (addProductExists) {
        addProductExists.quantity += parseInt(action.payload.quantity);
      } else {
        state.products.push({
          ...action.payload,
          quantity: parseInt(action.payload.quantity),
        });
        state.productNumber =
          state.productNumber + parseInt(action.payload.quantity);
      }

      // console.log("addProductExists===========>", addProductExists);

      // state.productNumber = state.productNumber + 1;
      // console.log("state==========>", state);
      // console.log("action==========>", action);
    },
    removeToCart: (state, action) => {},
  },
});

// console.log("cartSlice::", cartSlice);

export const { addToCart, removeToCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
