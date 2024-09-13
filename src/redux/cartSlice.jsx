import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  cartProducts: [],
  quantity: 0,
};

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    // Add to cart or update quantity if it already exists

    addToCart: (state, action) => {
      const itemIndex = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartProducts[itemIndex].quantity += action.payload.quantity;
      } else {
        state.cartProducts.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },

    // Remove from cart by filtering out the item based on its id
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
    },
    //Update the quantity of on item in the cart
    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.cartProducts.findIndex(
        (product) => product.id === id
      );
      if (itemIndex >= 0) {
        state.cartProducts[itemIndex].quantity = quantity;
      }
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    clearCart: () => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeFromCart,
  updateCartQuantity,
  setQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
