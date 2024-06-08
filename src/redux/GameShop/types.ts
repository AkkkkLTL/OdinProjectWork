import store from "./store"
import { PayloadAction } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Action<T> = PayloadAction<T>;

export interface HarborState {
  /** current order selected */
  currentOrder: string,
  /** open or close cart */
  isShowCart: boolean,
  /** search state */
  isSearching: boolean,
  /** current filter selected */
  currentFilter: string,
  isHideSidebar: boolean,
  isChangeSidebar: boolean,
  isOpenSearchGames: boolean,
}

export interface AddGameState {
  isError: boolean,
  genres: GameShop.Option[],
  platforms: GameShop.Option[],
  publishers: GameShop.Publisher[],
  developers: GameShop.Developer[],
  responseMessage: string,
  selectedGenres: GameShop.Option[],
  selectedPlatforms: GameShop.Option[],
  selectedPublishers: GameShop.Publisher[],
  selectedDevelopers: GameShop.Developer[],
}

export interface GamesState {
  games: GameShop.BasicGame[],
  searchedGames: GameShop.BasicGame[],
  inCartGames: GameShop.BasicGame[],
  gameDetail: GameShop.GameDetail,
  gameScreenshots: GameShop.ScreenShot[],
}