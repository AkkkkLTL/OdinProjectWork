import { createSlice } from "@reduxjs/toolkit";
import { Action, HarborState } from "./types";
import { getFromLocalStorage, saveToLocalStorage } from "./helpers";

const currentFilter = getFromLocalStorage<string>("currentFilter") || '';

export const harborSlice = createSlice({
  name: "harbor",
  initialState: <HarborState>{
    currentOrder: "Popularity",
    isShowCart: false,
    currentFilter: currentFilter,
    isChangeSidebar: false,
    isHideSidebar: false,
    isOpenSearchGames: false,
    isSearching: false,
  },
  reducers: {
    setCurrentFilter: (state, action: Action<string>) => {
      state.currentFilter = action.payload;
      saveToLocalStorage("currentFilter", state.currentFilter);
    },
    setIsChangeSidebar: (state, action: Action<boolean>) => {
      state.isChangeSidebar = action.payload;
    },
    setIsHideSidebar: (state, action: Action<boolean>) => {
      state.isHideSidebar = action.payload;
    },
    setCurrentOrder: (state, action: Action<string>) => {
      state.currentOrder = action.payload;
    },
    setIsShowCart: (state, action: Action<boolean>) => {
      state.isShowCart = action.payload;
    },
    setIsOpenSearchGames: (state, action: Action<boolean>) => {
      state.isOpenSearchGames = action.payload;
    },
    setIsSearching: (state, action: Action<boolean>) => {
      state.isSearching = action.payload;
    },
  },
});

export const {
  setCurrentFilter,
  setIsChangeSidebar,
  setIsHideSidebar,
  setCurrentOrder,
  setIsShowCart,
  setIsOpenSearchGames,
  setIsSearching,
} = harborSlice.actions;

export default harborSlice.reducer;