import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  productNumber: 0,
  counter: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      toast.success("Successfully added!");
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
        // console.log(
        //   " state.productNumber=========>",
        //   state.productNumber,
        //   action.payload.quantity
        // );

        state.productNumber =
          state.productNumber + parseInt(action.payload.quantity);
      }

      // console.log("addProductExists===========>", addProductExists);

      // state.productNumber = state.productNumber + 1;
      // console.log("state==========>", state);
      // console.log("action==========>", action);
    },
    removeFromCart: (state, action) => {
      toast.success("Successfully remove!");

      // console.log("state=========>", state);

      // find the product removing the array

      const productRemove = state.products.find(
        (product) => product.id === action.payload
      );

      // console.log("productRemove:", productRemove.quantity);
      // remove the quantity from product number
      state.productNumber = state.productNumber - productRemove.quantity;
      // find index of the product removing
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      // remove from the array
      state.products.splice(index, 1);
    },

    increment: (state, action) => {
      console.log("action===============>incrementProduct", action.payload);

      let incrementProduct = state.products.find((product) => {
        return product.id === action.payload;
      });

      incrementProduct.quantity = incrementProduct.quantity + 1;

      state.productNumber = state.productNumber + 1;
      // console.log(
      //   "state.productNumber==========>",
      //   typeof state.productNumber,
      //   state.productNumber + incrementProduct.quantity,
      //   typeof incrementProduct.quantity
      // );

      // console.log("incrementProduct===========>", { ...incrementProduct });
      // console.log("action===========>", action);
    },

    decrement: (state, action) => {
      let decrementProduct = state.products.find((product) => {
        return product.id === action.payload;
      });

      const productRemove = state.products.find(
        (product) => product.id === action.payload
      );

      decrementProduct.quantity = decrementProduct.quantity - 1;
      state.productNumber = state.productNumber - 1;

      if (decrementProduct.quantity === 0) {
        state.productNumber = state.productNumber - productRemove.quantity;
        // find index of the product removing
        const index = state.products.findIndex(
          (product) => product.id === action.payload
        );
        // remove from the array
        state.products.splice(index, 1);
      }
    },
  },
});

// console.log("cartSlice::", cartSlice);

export const { addToCart, removeFromCart, increment, decrement } =
  cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;

// const arr = [
//   {id:0,name: "sa", quantity: 1},
//   {id:1,name: "qw", quantity: 5},
//   {id:2,name: "dss", quantity: 1},
//   {id:3,name: "fd", quantity: 7},
// ]

// // run find in arr to get object where we have to increment the quantity

// const obj = {id:1,name: "qw", quantity: 5}
// obj.quantity = obj.quantity+1
// // console.log() // {id:1,name: "qw", quantity: 6}
// payload = 1;

// // output
// // const outpout = [
// //   {id:0,name: "sa", quantity: 1},
// //   {id:1,name: "qw", quantity: 6},
// //   {id:2,name: "dss", quantity: 1},
// //   {id:3,name: "fd", quantity: 7},
// // ]
