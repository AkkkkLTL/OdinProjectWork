import { StartScreenStyle } from "../../styles/memory-card/style";

export default function StartScreen({ onStart }) {

  const handleLevelSelect = (newLevel) => {
    let [amount, display] = newLevel;
    console.log(`amout: ${amount} display: ${display}`);
    onStart({amount:amount, display:display});
  }

  return (
    <>
      <StartScreenStyle>
        {console.log(`render StartScreen`)}
        <img
          src="OdinProjectWork/src/assets/imgs/cartoon-pokeball-sticker.png"
          alt="Logo"
          className="logo"
        />
        <h1>Memory Game</h1>
        <div className="difficultyLevels">
          <button onClick={() => {
            handleLevelSelect([5, 3]);
          }}>Easy</button>
          <button onClick={() => {
            handleLevelSelect([7, 4]);
          }}>Medium</button>
          <button onClick={() => {
            handleLevelSelect([10, 5]);
          }}>Hard</button>
        </div>
      </StartScreenStyle>
    </>
  )
}