import Carousel from "./Carousel";
import GameHeader from "./GameHeader";
import Info from "./Info";
import Price from "./Price";
import { Main, StyledGame } from "./styles";
import useGame from "./useGame";

const Game = () => {
  useGame();

  return (
    <StyledGame>
      <GameHeader />
      <Main>
        <Carousel />
        <Info />
        <Price />
      </Main>
    </StyledGame>
  );
}
export default Game;