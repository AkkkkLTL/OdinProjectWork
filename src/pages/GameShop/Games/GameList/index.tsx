import { Link } from "react-router-dom";
import { AddToCart, GameName, GameWrapper, Image, Info, PlayformIcons, StyledGameList } from "./styles";
import useGameList from "./useGameList";
import { platformIcons } from "./constants";
import { PATHS } from "@constants/GameShop/constants";

const GameList = () => {

  const { games } = useGameList();

  return (
    <StyledGameList>
      {games.length === 0 ? (
        <div>This is game List</div>
      ) : (
        <>
          {games.map(game => (
            <GameWrapper key={game.id}>
              <Link to={`../${PATHS.game.replace(/:id/g, game.id)}`}>
                <Image src={game.background_image} />
              </Link>
              <Info>
                <AddToCart>
                  Add to cart +
                </AddToCart>
                <PlayformIcons>
                  {game.parent_platforms.map(({platform}) => (
                    <span key={`${game.id}-${platform.id}`}>
                      {platformIcons[platform.slug || 'pc']}
                    </span>
                  ))}
                </PlayformIcons>
                <GameName
                  to={`game/${game.id}`}  
                >
                  {game.name}
                </GameName>
              </Info>
            </GameWrapper>
          ))}
        </>
      )}
    </StyledGameList>
  );
}
export default GameList;