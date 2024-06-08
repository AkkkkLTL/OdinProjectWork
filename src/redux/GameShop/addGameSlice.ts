import { createSlice } from "@reduxjs/toolkit";
import { AddGameState, Action } from "./types";

export const addGameSlice = createSlice({
  name: 'addGame',
  initialState: <AddGameState>{
    isError: false,
    genres: [],
    platforms: [],
    publishers: [],
    developers: [],
    responseMessage: '',
    selectedGenres: [],
    selectedPlatforms: [],
    selectedPublishers: [],
    selectedDevelopers: [],
  },
  reducers: {
    setIsError: (state, action: Action<boolean>) => {
      state.isError = action.payload;
    },
    setGenres: (state, action: Action<GameShop.Option[]>) => {
      state.genres = action.payload;
    },
    setPlatforms: (state, action: Action<GameShop.Option[]>) => {
      state.platforms = action.payload;
    },
    setPublishers: (state, action: Action<GameShop.Publisher[]>) => {
      state.publishers = action.payload;
    },
    setDevelopers: (state, action: Action<GameShop.Developer[]>) => {
      state.developers = action.payload;
    },
    setResponseMessage: (state, action: Action<string>) => {
      state.responseMessage = action.payload;
    },
    setSelectedGenres: (state, action: Action<GameShop.Option[]>) => {
      state.selectedGenres = action.payload;
    },
    setSelectedPlatforms: (state, action: Action<GameShop.Option[]>) => {
      state.selectedPlatforms = action.payload;
    },
    setSelectedPublishers: (state, action: Action<GameShop.Publisher[]>) => {
      state.selectedPublishers = action.payload;
    },
    setSelectedDevelopers: (state, action: Action<GameShop.Developer[]>) => {
      state.selectedDevelopers = action.payload;
    },
  }
});

export const {
  setIsError,
  setGenres,
  setPlatforms,
  setPublishers,
  setDevelopers,
  setResponseMessage,
  setSelectedGenres,
  setSelectedPlatforms,
  setSelectedPublishers,
  setSelectedDevelopers,
} = addGameSlice.actions;

export default addGameSlice.reducer;