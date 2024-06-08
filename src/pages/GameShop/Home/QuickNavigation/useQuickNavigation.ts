// module
import { MouseEvent } from "react"
import { useDispatch, useSelector } from "react-redux"

// projects
import { handleFilterClick } from "@helpers/game-shopping"
import { RootState } from "@redux/GameShop/types";
import { getGamesList } from "@api/GameShop/gameData";
import { setCurrentFilter } from "@redux/GameShop/harborSlice";


const useQuickNavigation = () => {

  const dispatch = useDispatch();
  const gamesState = useSelector((state: RootState) => state.games);

  const { games } = gamesState;

  const _getRandomID = async () => {
    // To random from [1, 10]
    const randomPage = Math.floor(Math.random() * 10) + 1;
    const response = await getGamesList({
      page: randomPage,
      page_size: 40,
      ordering: '-added',
    });
  }

  const _setRandomGame = async () => {
    const randomID = await _getRandomID();
  }

  // To handle the QuickNavigation button's click event
  const handleOnClick = (e: MouseEvent<HTMLElement>, name:string) => {

    // handleFilterClick({e:e, dispatch:dispatch, games:games})
    // if (name !== "Play Dice") return;
    // _setRandomGame();

    // To update current filter
    dispatch(setCurrentFilter(name));
    
  }

  return { handleOnClick }
}

export default useQuickNavigation;