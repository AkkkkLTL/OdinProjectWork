import { createSlice } from "@reduxjs/toolkit";
import { IBasketState, Action, IBasketAdd } from "./types";

export const BasketSlice = createSlice({
  name: "BASKET",
  initialState: <IBasketState>{
    products: []
  },
  reducers: {
    ADD: (state:IBasketState, action: Action<IBasketAdd>) => {
      return {
        ...state,
        products: state.products.concat(action.payload.product)
      }
    }
  }
});

export const {
  ADD
} = BasketSlice.actions;

export default BasketSlice.reducer;