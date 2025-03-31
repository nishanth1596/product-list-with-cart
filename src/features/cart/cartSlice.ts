import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type CartImages = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

export type CartItem = {
  image: CartImages;
  name: string;
  quantity: number;
  unitPrice: number;
  unitTotalPrice: number;
};

type InitialStateProps = {
  cart: CartItem[];
  orderConfirmed: boolean;
};

const initialState: InitialStateProps = {
  cart: [],
  orderConfirmed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newCartItem: CartItem = {
        image: action.payload.image,
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

    confirmOrder(state) {
      state.orderConfirmed = true;
    },

    newOrder() {
      return initialState;
    },
  },
});

export default cartSlice.reducer;
export const {
  deleteItem,
  addItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  confirmOrder,
  newOrder,
} = cartSlice.actions;

export const getCartData = (store: RootState) => store.cart.cart;

export const getQuantity = (name: string) => (store: RootState) =>
  store.cart.cart.find((item) => item.name === name)?.quantity;

export const getIsOrderConfirmed = (store: RootState) =>
  store.cart.orderConfirmed;
