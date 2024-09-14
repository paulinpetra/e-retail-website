// tried lazy initialization for possible timing issues with retrieving the store
//does not need to be client component?
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import cartSlice from "./cartSlice";

let _store;

export function initializeStore() {
  return configureStore({
    reducer: {
      products: productsReducer,
      cart: cartSlice,
    },
  });
}

export function getStore() {
  if (!_store) {
    _store = initializeStore();
  }
  return _store;
}
