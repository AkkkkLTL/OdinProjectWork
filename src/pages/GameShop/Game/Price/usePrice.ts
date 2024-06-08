import { RootState } from "@redux/GameShop/types";
import { useSelector } from "react-redux";

const usePrice = () => {
  const gamesState = useSelector(
    (state: RootState) => state.games
  );

  
}

export default usePrice;