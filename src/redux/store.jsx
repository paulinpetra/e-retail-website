// tried lazy initialization for possible timing issues with retrieving the store
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";

let _store; //a flag to indicate wheather store has been initialized

//create and configure the Redux store when called
export function initializeStore() {
  return configureStore({
    reducer: {
      products: productsReducer,
      cart: cartReducer,
    },
  });
}
//checks if the store has been initialized, if not do it and then return it
export function getStore() {
  if (!_store) {
    _store = initializeStore();
  }
  return _store;
}
