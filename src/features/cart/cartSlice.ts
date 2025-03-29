import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
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
