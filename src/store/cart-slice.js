import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    generateCart(state, action) {
      state.items = action.payload.items;
    },
    addValuesToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.products.push({
          id: newItem.id,
          quantity: newItem.quantity,
          totalPrice: newItem.totalPrice,
        });
      } else {
        existingItem.quantity = newItem.quantity;
        existingItem.totalPrice = newItem.totalPrice;
      }
      state.totalQuantity = state.products.reduce((acc, obj) => {
        return acc + obj.quantity;
      }, 0);
      state.totalPrice = state.products.reduce((acc, obj) => {
        return acc + obj.totalPrice;
      }, 0);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
