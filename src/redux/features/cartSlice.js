import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart-storage",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product._id == action.payload._id,
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
        state.totalPrice = state.totalPrice + existingProduct.price;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
        state.totalPrice = state.totalPrice + action.payload.price;
      }
    },

    removeFromCart: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product._id == action.payload,
      );

      if (existingProduct) {
        state.totalPrice =
          state.totalPrice - existingProduct.price * existingProduct.quantity;
        state.products = state.products.filter(
          (product) => product._id != action.payload,
        );
      }
    },

    increaseQunatity: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product._id == action.payload,
      );
      if (existingProduct && existingProduct.quantity < 10) {
        existingProduct.quantity += 1;
        state.totalPrice += existingProduct.price;
      }
    },

    decreaseQunatity: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product._id == action.payload,
      );
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
        state.totalPrice -= existingProduct.price;
      }
    },

    clearCart: (state, action) => {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQunatity,
  decreaseQunatity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
