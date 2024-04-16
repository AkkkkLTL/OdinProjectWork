import { useState } from "react";
import usePokemons from "../../components/memory-card/usePokemons"
import LoadingScreen from "./LoadingScreen";
import StartScreen from "./StartScreen";
import { GlobalStyle } from "../../styles/memory-card/style";
import { ResetStyle } from "../../styles/common/commonStyle";
import GameScreen from "./GameScreen";
import Footer from "../../components/memory-card/Footer";
import characters from "../../styles/common/character";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function MemoryCardApp() {

  const { 
    pokemonsPlayWith,setPokemonsPlayWith,
    pokemonsToDisplay,setPokemonsToDisplay,
    getRandomPokemons,shufflePokemons } = usePokemons();

  /* React States collactions */
  // loading state
  const [loading, setLoading] = useState(false);
  // game status state: "start" "game" "win" "lose"
  const [gameStatus, setGameStatus] = useState("start");
  const [difficultyLevel, setDifficultyLevel] = useState({});
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => 
    localStorage.getItem("best-score") || 0
  );

  const startGame = async (level) => {

    // start to loading
    setLoading(true);
    setDifficultyLevel(level);

    // get all pokemons cards
    const randomCards = await getRandomPokemons(level.amount);
    // log all pokemons data
    console.log(`randomCards ${JSON.stringify(randomCards)}`);

    setPokemonsPlayWith(await new Promise((resolve) => resolve(
      randomCards)
    ).then((values) => {
      console.log(`excute after randomCards`);
      setPokemonsToDisplay(shufflePokemons(values, level.display));
      setLoading(false);
      setGameStatus("game");
      return values;
    }));
  }

  const handleQuit = () => {
    setGameStatus("start");
  }

  return (
    <>
      <link href={characters[0].src} rel="stylesheet" />
      <ResetStyle />
      <GlobalStyle />
      {console.log(`render MemoryCardApp loading = ${loading} gameStatus=${gameStatus} pokemonsPlayWith=${JSON.stringify(pokemonsPlayWith)}`)}
      {loading 
        ? (
          <LoadingScreen />
        )
        :(
          <>
            {gameStatus === "start" 
              ? <StartScreen 
                  onStart={(difficultyLevel) => {
                    startGame(difficultyLevel);
                  }}
                />
              : <GameScreen 
                  pokemonsPlayWith={pokemonsPlayWith}
                  setPokemonsPlayWith={setPokemonsPlayWith}
                  pokemonsToDisplay={pokemonsToDisplay}
                  setPokemonsToDisplay={setPokemonsToDisplay}
                  currentScore={currentScore}
                  setCurrentScore={setCurrentScore}
                  bestScore={bestScore}
                  setBestScore={setBestScore}
                  shuffle={shufflePokemons}
                  difficultyLevel={difficultyLevel}
                />
            }
            <Footer />
          </>
        )
      }
    </>
  )
}