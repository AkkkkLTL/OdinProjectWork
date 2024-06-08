import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./gamesSlice";
import addGameReducer from "./addGameSlice";
import harborReducer from "./harborSlice";

export default configureStore({
  reducer: {
    games: gamesReducer,
    addGame: addGameReducer,
    harbor: harborReducer,
  }
});