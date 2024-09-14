"use client";
import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  amount: 0,
  price: 0,
  imgAlt: "",
  imgSrc: "",
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : defaultState;
  }
  return defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const newCartItem = action.payload;
      const item = state.cartItems.find((i) => i.cartID === newCartItem.cartID);
      if (item) {
        item.amount += newCartItem.amount;
      } else {
        state.cartItems.push(newCartItem);
      }
      state.numItemsInCart += newCartItem.amount;
      state.cartTotal += newCartItem.price * newCartItem.amount;

      cartSlice.caseReducers.calculateTotals(state);
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    clearCart: (state) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(defaultState));
      }
      return defaultState;
    },
    removeItem: (state, action) => {
      const cartID = action.payload;
      const cartItem = state.cartItems.find((i) => i.cartID === cartID);
      if (!cartItem) return;
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);
      state.numItemsInCart -= cartItem.amount;
      state.cartTotal -= cartItem.price * cartItem.amount;
      cartSlice.caseReducers.calculateTotals(state);
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const cartItem = state.cartItems.find((i) => i.cartID === cartID);
      if (!cartItem) return;

      state.numItemsInCart += amount - cartItem.amount;
      state.cartTotal += cartItem.price * (amount - cartItem.amount);
      cartItem.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    calculateTotals: (state) => {
      state.orderTotal = state.cartTotal; // + state.shipping + state.tax
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;
