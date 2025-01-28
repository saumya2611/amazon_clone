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
      // check if in product array
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
        console.log(
          " state.productNumber=========>",
          state.productNumber,
          action.payload.quantity
        );

        state.productNumber =
          state.productNumber + parseInt(action.payload.quantity);
      }

      // console.log("addProductExists===========>", addProductExists);

      // state.productNumber = state.productNumber + 1;
      // console.log("state==========>", state);
      // console.log("action==========>", action);
    },
    removeToCart: (state, action) => {
      console.log("action=========>", action);

      // find the product removing the array

      const productRemove = state.products.find(
        (product) => product.id === action.payload
      );
      // remove the quantity from product number
      state.productNumber = state.productNumber - productRemove.quantity;
      // find index of the product removing
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      // remove from the array
      state.products.splice(index, 1);
    },
  },
});

// console.log("cartSlice::", cartSlice);

export const { addToCart, removeToCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
