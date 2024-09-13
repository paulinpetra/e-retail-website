// tried lazy initialization for possible timing issues with retrieving the store
//does not need to be client component?
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";

let _store;

export function initializeStore() {
  return configureStore({
    reducer: {
      products: productsReducer,
    },
  });
}

export function getStore() {
  if (!_store) {
    _store = initializeStore();
  }
  return _store;
}
