import { Product } from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (product) {
        product.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.items = [];
    },

    loadCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  loadCart,
} = cartSlice.actions;

export default cartSlice.reducer;