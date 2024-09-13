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

// only the ReduxProvider component is treated as a client component,
// and the rest of the application can still benefit from server-side rendering where applicable.
