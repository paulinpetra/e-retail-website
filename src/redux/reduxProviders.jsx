//I use a provider component and mark it use client so that I can import that to the layout file
//instead of importing the provider directly which would make the whole app client side
//This way the rest of the application can still benefit from server-side rendering where applicable.
"use client";
import { Provider } from "react-redux";
import { getStore } from "./store";

export default function ReduxProviders({ children }) {
  const store = getStore();

  if (!store) {
    throw new Error("Redux store is not available");
  }

  return <Provider store={store}>{children}</Provider>;
}
