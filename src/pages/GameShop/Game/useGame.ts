import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { cutOffGame } from "./helpers";
import { useCallback, useEffect } from "react";
import { getGameDetail, getGameScreenshots } from "@api/GameShop/RAWGAPI";
import { setGameDetail, setGameScreenshots } from "@redux/GameShop/gamesSlice";

const useGame = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const gameID = cutOffGame(location.pathname);
  console.log(`gameID is ${gameID}`);

  const setGameDetails = useCallback(async () => {
    const details = await getGameDetail(gameID);
    if (details) dispatch(setGameDetail(details));
    const screenshots = await getGameScreenshots(gameID);
    if (screenshots) dispatch(setGameScreenshots(screenshots));
  }, [dispatch, gameID]);

  useEffect(() => {
    setGameDetails();
  }, []);
}
export default useGame;