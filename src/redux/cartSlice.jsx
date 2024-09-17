"use client";
import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0, // Total cost of the items in the cart
  amount: 0, //quantity of a specific item

  price: 0,
  imgAlt: "",
  imgSrc: "",
  orderTotal: 0, //Total order value (can include taxes, shipping, etc. in the future)
};

// Function to retrieve the cart from localStorage if it exists
// This function checks if the window object is defined (to avoid server-side errors)
// and retrieves the cart data, or returns the default state if no cart is found

const getCartFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const cart = localStorage.getItem("cart");
    console.log(localStorage.getItem("cart"));
    return cart ? JSON.parse(cart) : defaultState;
  }
  return defaultState; //// If not in the browser (e.g., server-side), return the default state
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const newCartItem = action.payload; //The new item to add is passed in the action payload
      // First check if the item is already in the cart
      const item = state.cartItems.find((i) => i.cartID === newCartItem.cartID);

      // If the item already exists, increase the amount
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
