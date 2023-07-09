import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    checkoutPrice: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }

      state.checkoutPrice += newItem.price * newItem.quantity;
    },
    clearCart: (state) => {
      state.items = [];
      state.checkoutPrice = 0;
    },
  },
});

export const { addItemToCart, clearCart } = cartSlice.actions;

export const getCart = (state) => {
  return state.cart;
};

export default cartSlice.reducer;
