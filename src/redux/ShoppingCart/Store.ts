import { configureStore } from "@reduxjs/toolkit";
import BasketReducer from "./BasketSlice";
import ProductsReducer from "./ProductsSlice";

const Store = configureStore({
  reducer: {
    products: ProductsReducer,
    basket: BasketReducer
  }
});

export default Store;