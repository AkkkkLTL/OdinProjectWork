import { AsyncThunkAction, Dispatch, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action, AppThunk, IProductsGetAllAction, IProductsGetSingleAction, IProductsState } from "./types";
import { getProducts as getProductsFromAPI, getProduct as getProductFromAPI } from "@/api/ShoppingCart";

export const ProductsSlice = createSlice({
  name: "PRODUCTS",
  initialState: <IProductsState>{
    products: [],
    productsLoading: false,
    currentProduct: null
  },
  reducers: {
    LOADING: (state:IProductsState) => {
      return {
        ...state,
        productsLoading: true
      }
    },
    GETALL: (state:IProductsState, action:Action<IProductsGetAllAction>) => {
      return {
        ...state,
        products: action.payload.products,
        productsLoading: false
      }
    },
    GETSINGLE: (state:IProductsState, action:Action<IProductsGetSingleAction> ) => {
      return {
        ...state,
        currentProduct: action.payload.product,
        productsLoading: false 
      }
    }
  }
});

export const {
  LOADING,
  GETALL,
  GETSINGLE
} = ProductsSlice.actions;

export default ProductsSlice.reducer;

export const getProducts:any = createAsyncThunk(
  "PRODUCTS/getProducts",
  async (args, {dispatch}) => {
    dispatch(LOADING());
    const products = await getProductsFromAPI();
    dispatch(GETALL({products}));
  }
)

export const getProduct:any = (id:number):AppThunk => async (dispatch: Dispatch) => {
  dispatch(LOADING());
  const product = await getProductFromAPI(id);
  return dispatch(GETSINGLE({product}));
}