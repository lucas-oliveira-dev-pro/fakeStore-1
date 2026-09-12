import { Product } from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BuyItem extends Product {
  quantity: number;
}

interface BuyState {
  item: BuyItem;
}

const initialState: BuyState = {
  item: {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
    quantity: 0
  },
};

const buySlice = createSlice({
  name: "buy",

  initialState,

  reducers: {
    buy: (state, action: PayloadAction<BuyItem>) => {
      state.item = action.payload;
    },
  },
});

export const { buy } = buySlice.actions;

export default buySlice.reducer;
