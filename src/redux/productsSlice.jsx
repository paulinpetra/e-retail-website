//Redux actions to make fetch calls to my Next.js API routes.
// This way, I can centralize my data fetching logic within Redux while still leveraging the server-side capabilities of Next.js.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productsFetch } from "@/app/api/productsFetch";

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts", //action type prefix
  productsFetch
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [], //array for multiple products
    status: "idle", //Status to track loading state ('idle', 'loading', 'succeeded', 'failed')
    error: null, // Stores any error messages if a request fails
  },

  reducers: {},

  // Handling the lifecycle of the async thunk using extraReducers
  extraReducers: (builder) => {
    // This builder allows us to add cases for the states of an async thunk
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Export the reducer generated by the slice to be included in the Redux store

export default productsSlice.reducer;
