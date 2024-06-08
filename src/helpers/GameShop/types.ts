import { GameTypes } from "@api/GameShop/types";
import { Action, Dispatch } from "@reduxjs/toolkit";
import { MouseEvent } from "react";

export interface IHandleFilterClick {
  e: MouseEvent<HTMLElement>,
  dispatch: Dispatch<Action>,
  games: GameTypes[],
  currentFilter?: string,
  location?: string,
}