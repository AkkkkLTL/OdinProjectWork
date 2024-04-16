export default function Header({
  onQuit,
  currentScore,
  bestScore
}) {
  return (
    <header>
      <div>
        <button onClick={onQuit} className="logo-button">
          <span className="poke">Poké</span>
          <span className="memo">Memo</span>
        </button>
        <div className="score-board">
          <div>Score:{currentScore}</div>
          <div>Best score: {bestScore}</div>
        </div>
      </div>
    </header>
  )
}