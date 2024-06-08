import { RootState } from "@redux/GameShop/types";
import { useSelector } from "react-redux";

const useGameList = () => {
  const gamesState = useSelector((state: RootState) => state.games);
  const { games } = gamesState;

  return {
    games
  }
}

export default useGameList;