import { Video } from "../Home/styles";
import Form from "./Form";
import { Header, StyledAddGame } from "./styles";
import video from '@assets/video/crystal.mp4';

const AddGame = () => {

  
  return (
    <>
      <StyledAddGame>
        <Header>Add a missing game</Header>
        <Form />
      </StyledAddGame>
      <Video
        autoPlay
        loop
      >
        <source src={video} type="video/mp4" />
      </Video>
    </>
  );
}
export default AddGame;