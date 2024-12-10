import React from "react";
import Cell from "./Cell";

const Board = ({ player, togglePlayer, handleGameOver, board, setBoard }) => {
  const handleClick = (row, col) => {
    if (board[row][col] !== "") return;

    const newBoard = board.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? player : cell))
    );

    setBoard(newBoard);

    if (checkWin(newBoard, player)) {
      handleGameOver(player);
    } else {
      togglePlayer();
    }
  };

  const checkWin = (currentBoard, currentPlayer) => {
    for (let i = 0; i < 3; i++) {
      if (currentBoard[i].join("").includes("SOS")) return true;
    }

    for (let i = 0; i < 3; i++) {
      let colStr = "";
      for (let j = 0; j < 3; j++) {
        colStr += currentBoard[j][i];
      }
      if (colStr.includes("SOS")) return true;
    }

    let diag1 = currentBoard[0][0] + currentBoard[1][1] + currentBoard[2][2];
    let diag2 = currentBoard[0][2] + currentBoard[1][1] + currentBoard[2][0];
    if (diag1.includes("SOS") || diag2.includes("SOS")) return true;

    return false;
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        //justifyContent: "center",
        //width: "200px",
      }}
    >
      {board.map((row, i) =>
        row.map((cell, j) => (
          <Cell
            key={`${i}-${j}`}
            value={cell}
            onClick={() => handleClick(i, j)}
            player={player}
          />
        ))
      )}
    </div>
  );
};

export default Board;
