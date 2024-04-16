import styled from "styled-components"

const ScoreStyle = styled.div`
  text-transform: uppercase;

`

export default function Score({currentScore, bestScore}) {
  return (
    <div>
      <p className="current-score">
        Score: <b>{currentScore}</b>
      </p>
      <p className="best-score">
        High Score: <b>{bestScore}</b>
      </p>
    </div>
  )
}