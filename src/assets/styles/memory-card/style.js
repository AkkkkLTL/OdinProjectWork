import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Madimi One' sans-serif;
}

html,
body {
  min-height: 100%;
}

button {
  cursor: pointer;
  font-family: inherit;
  color: inherit;
}

button:focus-visible {
  outline: 1px solid skyblue;
}
`

/* -  - - - - - - - Page Style - - - - - - - - -  */
/* Game Screen style */
export const GameScreenStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex-grow: 1;

  .cardSection {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
`
/* Start Screen Style */
export const StartScreenStyle = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 40px;
  .logo {
    height: 287px;
    width: auto;
  }

  h1 {
    color: #a1ac82;
    font-size: 60px;
    margin-bottom: 50px;
    text-shadow: -.06em 0 .08em black, .06em 0 .08em black,
      0 .06em .08em black, 0 -.06em .08em black,
      -.06em .06em .08em black, .06em .06em .08em black,
      -.06em -.06em .08em black, .06em -.06em .08em black;
  }
  
  .difficultyLevels {
    display: flex;
    gap: 20px;
  }

  button {
    background-color : #a1ac82;
    border-radius: 8px;
    box-shadow: 0 5px 10px #000, 0 -5px 10px #000;
    color: black;
    font-size: 24px;
    padding: 14px 18px;
  }
`

/* - - - - - - - - - - Components Style - - - - - - -  */
/* Card singal style */
export const CardStyle = styled.div`
  &.card-container {
    width: 180px;
    height: 250px;
    transform-style: preserve-3d;
    transition: transform 1s;
    cursor: pointer;
    animation: flip-card 1s;

    &.flipped {
      transform: rotateY(180deg);
    }
  }

  .card-inner {
    height: 100%;
    transform-style: preserve-3d;
  }

  .card-front {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    font-size: 22px;
  }

  .card-image {
    width: 96px;
    height: 96px;
    margin: auto;
    display: block;
  }

  .card-back {
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
  }

  @keyframes flip-card {
    from {
      transform: rotateY(180deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }
`