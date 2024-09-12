import { IProduct } from "@/types/ShoppingCart";
import type { PayloadAction, ThunkAction, Action as ReduxAction } from "@reduxjs/toolkit";
import Store from "./Store";

export interface IBasketState {
  readonly products: IProduct[]
}

export interface IBasketAdd {
  product: IProduct;
}

export interface IProductsGetAllAction {
  products: IProduct[]
}

export interface IProductsGetSingleAction {
  product: IProduct | null;
}

export interface IProductsState {
  readonly products: IProduct[];
  readonly productsLoading: boolean;
  readonly currentProduct: IProduct | null;
}

export type Action<P> = PayloadAction<P>;

export type RootState = ReturnType<typeof Store.getState>;

export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  ReduxAction
>