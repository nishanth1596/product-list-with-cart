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
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newCartItem: CartItem = {
        name: action.payload.name,
        quantity: 1,
        unitPrice: action.payload.price,
        unitTotalPrice: action.payload.price,
      };

      state.cart = [...state.cart, newCartItem];
    },

    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.name !== action.payload);
    },

    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.name === action.payload);

      if (item) {
        item.quantity += 1;
        item.unitTotalPrice = item.unitPrice * item.quantity;
      }
    },

    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.name === action.payload);

      if (item) {
        if (item?.quantity === 1) {
          state.cart = state.cart.filter(
            (item) => item.name !== action.payload
          );
        } else {
          item.quantity -= 1;
          item.unitTotalPrice = item.unitPrice * item.quantity;
        }
      }
    },
  },
});

export default cartSlice.reducer;
export const {
  deleteItem,
  addItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export const getCartData = (store: RootState) => store.cart.cart;

export const getQuantity = (name: string) => (store: RootState) =>
  store.cart.cart.find((item) => item.name === name)?.quantity;
