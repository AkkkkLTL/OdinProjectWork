import { setGames } from "@redux/GameShop/gamesSlice";
import { IHandleFilterClick } from "./types";
import { setCurrentFilter } from "@redux/GameShop/harborSlice";

export const handleFilterClick = ({
  e,
  dispatch,
  games,
  currentFilter,
}:IHandleFilterClick) => {
  const target = e.target as HTMLElement;
  const { textContent } = target;

  if (textContent !== currentFilter && games.length > 0)
    dispatch(setGames([]));

  if (textContent) dispatch(setCurrentFilter(textContent));
}