import { RootState } from "@redux/GameShop/types";
import { useSelector } from "react-redux";
import { BackButton, GameName, Header } from "./styles";
import { PATHS } from "@constants/GameShop/constants";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";

const GameHeader = () => {
  const gameName = useSelector(
    (state: RootState) => state.games.gameDetail.name,
  );

  return (
    <Header>
      <BackButton to={PATHS.games} relative="path">
        <Icon path={mdiArrowLeft} size={1} /> Harbor
      </BackButton>
      <GameName>{gameName}</GameName>
    </Header>
  );
}

export default GameHeader;