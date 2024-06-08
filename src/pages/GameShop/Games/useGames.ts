import { getGamesList } from "@api/GameShop/gameData";
import { IResSchema, TResGamesList } from "@api/GameShop/types";
import { IGames } from "@custypes/game-shopping";
import { RootState } from "@redux/GameShop/types"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { TLoadGames } from "./types";
import { FILTER_TITLE, ORDER_TITLE } from "@constants/GameShop/constants";
import { getLast30Days } from "./helpers";
import { setGames } from "@redux/GameShop/gamesSlice";

const useGames = () => {
  const dispatch = useDispatch();
  const gamesState = useSelector((state: RootState) => state.games);
  const harborState = useSelector((state: RootState) => state.harbor);

  const { games } = gamesState;
  const { currentFilter, orderTitle } = harborState;

  const getOrder = () => {
    switch (orderTitle)
    {
      case ORDER_TITLE.NAME:
        return 'name';
      case ORDER_TITLE.POPULARITY:
        return '-added';
    }
  }

  const getGames = () => {
    switch (currentFilter)
    {
      case FILTER_TITLE.LAST_30_DAY:
        return getGamesList({dates: getLast30Days(), ordering: getOrder()});
    }
  }

  const _returnGames = async ({
    games,
    inCartGames,
    getGames
  }:TLoadGames) => {
    const response = getGames ? await getGames() : games;
    if (!response) return [];

    const results = response.results || response.data;
    console.log(results);
    const modifiedResults = results.map(game => ({
      ...game,
    }));
    return modifiedResults as IGames[];
  }

  const _loadGames = async () => {
    if (games.length > 1) return;
    const results = await _returnGames({getGames});

    if (results?.length === 0) return;
    console.log(`get results ${results}`);
    dispatch(setGames(results));
  }

  // To load games when enter the games page
  // To load games when changing filter or order
  useEffect(() => {
    console.log("Loading Game");
    _loadGames();
  },[currentFilter, orderTitle]);

  return {
    games
  }
}

export default useGames;