import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type CartItem = {
  name: string;
  quantity: number;
  unitPrice: number;
  unitTotalPrice: number;
};

type InitialStateProps = {
  cart: CartItem[];
  netTotalPrice: number;
};

const initialState: InitialStateProps = {
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

    deleteItem(state, actions) {
      state.cart = state.cart.filter((item) => item.name !== actions.payload);
    },
  },
});

export default cartSlice.reducer;
export const { deleteItem, addItem } = cartSlice.actions;

export const getCartData = (store: RootState) => store.cart.cart;
