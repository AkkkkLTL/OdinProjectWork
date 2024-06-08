import { createSlice } from "@reduxjs/toolkit";
import { Action, GamesState } from "./types";
import { getFromLocalStorage, saveToLocalStorage } from "./helpers";

const currentGamesInCart = getFromLocalStorage<GameShop.BasicGame[]>("inCartGames") || [];
const currentGames = getFromLocalStorage<GameShop.BasicGame[]>("games") || [];

export const gamesSlice = createSlice({
  name: 'games',
  initialState: <GamesState>{
    games:currentGames,
    searchedGames: [],
    inCartGames: currentGamesInCart,
    gameDetail: {
      id: -1,
      name: "default game",
      background_image: '',
      parent_platforms: [],
      description_raw: '',
    },
    gameScreenshots: [{id: 0, image: ''}],
  },
  reducers: {
    setGames: (state, action: Action<GameShop.BasicGame[]>) => {
      state.games = action.payload;
      saveToLocalStorage("games", state.games);
    },
    setSearchedGames: (state, action: Action<GameShop.BasicGame[]>) => {
      state.searchedGames = action.payload;
    },
    setInCartGames: (state, action: Action<GameShop.BasicGame[]>) => {
      state.inCartGames = action.payload;
      saveToLocalStorage("inCartGames", state.inCartGames);
    },
    setGameDetail: (state, action: Action<GameShop.GameDetail>) => {
      state.gameDetail = action.payload;
    },
    setGameScreenshots: (state, action: Action<GameShop.ScreenShot[]>) => {
      state.gameScreenshots = action.payload;
    },
  },
});

export const {
  setGames,
  setSearchedGames,
  setInCartGames,
  setGameDetail,
  setGameScreenshots,
} = gamesSlice.actions;

export default gamesSlice.reducer;