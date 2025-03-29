import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // cart: [],
  cart: [
    {
      name: "Classic Tiramisu",
      quantity: 1,
      unitPrice: 5.5,
      unitTotalPrice: 5.5,
    },
    {
      name: "Vanilla Bean Crème Brûlée",
      quantity: 4,
      unitPrice: 7,
      unitTotalPrice: 28,
    },
    {
      name: "Vanilla Panna Cotta",
      quantity: 2,
      unitPrice: 6.5,
      unitTotalPrice: 13,
    },
  ],

  netTotalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem() {
      console.log("Hello");
    },
  },
});

export default cartSlice.reducer;

export const getCartData = (store) => store.cart.cart;
