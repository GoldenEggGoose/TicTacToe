import { useEffect, useState } from "react";
import Board from "./Board";
import History from "./History";

const Game = () => {
  const [history, setHistory] = useState([
    { squares: new Array(9).fill(null) },
  ]);
  const [winner, setWinner] = useState(null);

  let handleClickMove = (index) => {
    const newHistory = history.slice(0, index + 1);
    setWinner(null);
    setHistory(newHistory);
  };

  useEffect(() => {
    console.log("history ", history);
  }, [history]);
  return (
    <div className="game">
      <div className="game-board">
        <Board
          history={history}
          setHistory={setHistory}
          winner={winner}
          setWinner={setWinner}
        />
      </div>
      <div className="game-info">
        <History history={history} handleClickMove={handleClickMove} />
      </div>
    </div>
  );
};

export default Game;
