import { RootState } from "@redux/GameShop/types";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

const useCarousel = () => {
  const gamesState = useSelector((state: RootState) => state.games);
  const { gameDetail, gameScreenshots } = gamesState;

  const gameBackground = {
    id: nanoid(),
    image: gameDetail.background_image,
  }

  const screenshots = [gameBackground,...gameScreenshots];

  return { screenshots }
}

export default useCarousel;