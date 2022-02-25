import { useState, useEffect } from "react";
import Square from "./Square";

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const Board = () => {
  const [currentPlayer, setCurrentPlayer] = useState(
    Math.random() > 0.5 ? "X" : "O"
    );
  const [status, setStatus] = useState();
  const [winner, setWinner] = useState(null);
  const [squares, setSquares] = useState(new Array(9).fill(null));

  useEffect(() => {
    const allSquaresAreFilled = squares.every((square) => {
      console.log('all squares filled ', Boolean(square));
      return Boolean(square);
    });
    if (winner) {
      setStatus("Winner: " + winner);
    } else if (allSquaresAreFilled) {
      console.log('squares ', squares)
      console.log('square ', Boolean(squares[2]))
      setStatus("It's a Draw");
    } else {
      setStatus(`Next player: ${currentPlayer}`);
    }
  }, [winner, currentPlayer, squares]);

  let onClickSquare = (index) => {
    let newSquares = [...squares];
    if (squares[index] === null && !winner) {
      newSquares[index] = currentPlayer;
      setCurrentPlayer((prev) => {
        if (prev === "X") {
          return "O";
        }
        return "X";
      });
      setSquares(newSquares);
      setWinner(calculateWinner(newSquares));
    }
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onClick={() => {
            onClickSquare(0);
          }}
        />
        <Square
          value={squares[1]}
          onClick={() => {
            onClickSquare(1);
          }}
        />
        <Square
          value={squares[2]}
          onClick={() => {
            onClickSquare(2);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onClick={() => {
            onClickSquare(3);
          }}
        />
        <Square
          value={squares[4]}
          onClick={() => {
            onClickSquare(4);
          }}
        />
        <Square
          value={squares[5]}
          onClick={() => {
            onClickSquare(5);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onClick={() => {
            onClickSquare(6);
          }}
        />
        <Square
          value={squares[7]}
          onClick={() => {
            onClickSquare(7);
          }}
        />
        <Square
          value={squares[8]}
          onClick={() => {
            onClickSquare(8);
          }}
        />
      </div>
    </div>
  );
};

export default Board;
