import { Content, Main } from "./styles";
import Sidebar from "./Sidebar";
import GameList from "./GameList";
import Top from "./Top";

const Games = () => {

  return (
    <Main
      $isList={false}
    >
      <Sidebar />
      <Content>
        <Top />
        <GameList />
      </Content>
    </Main>
  );
}
export default Games;