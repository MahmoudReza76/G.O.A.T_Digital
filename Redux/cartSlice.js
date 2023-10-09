import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    addedItems: [],
    watch: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addtoCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0 && state.addedItems.includes(action.payload.id)) {
        toast.error("The product was already added to the card", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        state.cart.push(action.payload);
        state.addedItems.push(action.payload.id);
        toast.success("The product has been added to the card", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    },

    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * +quantity;
          cartTotal.totalPrice += +itemTotal;
          cartTotal.totalQuantity += +quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },

    removeFromCart(state, action) {
      const id = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },

    increase: (state, action) => {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
      }
    },
    decrease: (state, action) => {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      }
    },
    addToWatch: (state, action) => {
      state.watch.push(action.payload);
    },
    removeFromWatch: (state, action) => {
      state.watch = state.watch.filter((item) => item.id !== action.payload);
    },
  },
});
export default cartSlice.reducer;
export const {
  addtoCart,
  removeFromCart,
  increase,
  decrease,
  getCartTotal,
  addToWatch,
  removeFromWatch,
} = cartSlice.actions;
