import { useState } from "react";
import Card from "../../components/memory-card/Card";
import Header from "../../components/memory-card/Header";
import { GameScreenStyle } from "../../styles/memory-card/style";
import GameOverModal from "./GameOverModal";

export default function GameScreen({
  pokemonsPlayWith,
  setPokemonsPlayWith,
  pokemonsToDisplay,
  setPokemonsToDisplay,
  currentScore,
  setCurrentScore,
  bestScore,
  setBestScore,
  shuffle,
  difficultyLevel
}) {

  const [isFlipped, setIsFlipped] = useState(false);
  const [result, setResult] = useState("");

  const handleCardClick = (card) => {
    console.log(`click and the isFlipped is ${isFlipped}`);
    // flip to back
    setIsFlipped(true);

    // if the card is not clicked, add the score
    if (!card.clicked) {
      card.clicked = true;
      setCurrentScore(++currentScore);
    }
    else {
      // is the card is clicked, set if the best, then clear the currentScore
      if (currentScore > bestScore) {
        localStorage.setItem("best-score", currentScore);
        setBestScore(currentScore);
      }
      setResult("lose");
      setCurrentScore(0);
    }

    setTimeout(() => {
      console.log(`GameScree pokemonsPlayWith ${JSON.pokemonsPlayWith}`);
      setPokemonsToDisplay(shuffle( pokemonsPlayWith, difficultyLevel.display ));
      setIsFlipped(false);
    }, 800);
  }

  return (
    <GameScreenStyle>
      {console.log(`render the GameScreen result=${result}`)}
      <Header 
       currentScore={currentScore}
       bestScore={bestScore}
      />
      <div className="cardSection">
        {pokemonsToDisplay.map(pokemon => {
          return (
            <Card
              key={pokemon.id}
              card={pokemon}
              isFlipped={isFlipped}
              handleCardClick={handleCardClick}
            />
          );
        })}
      </div>
      {result == "lose" ? <GameOverModal /> : <></>}
    </GameScreenStyle>
  )
}