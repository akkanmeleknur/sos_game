import React, { useState } from "react";
import Board from "./components/Board";

function App() {
  const [player, setPlayer] = useState("S");
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(Array(3).fill().map(() => Array(3).fill("")));

  const togglePlayer = () => {
    setPlayer((prev) => (prev === "S" ? "O" : "S"));
  };

  const handleGameOver = (winningPlayer) => {
    setWinner(winningPlayer);
  };

  const resetGame = () => {
    setWinner(null);
    setPlayer("S");
    setBoard(Array(3).fill().map(() => Array(3).fill(""))); // Tahtayı sıfırla
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        margin: "20px",
      }}
    >
      
      <div style={{backgroundColor:"lightpink",padding:"20px 50px",borderRadius:10,}}>
        <h2 style={{ textAlign: "center" }}>SOS Oyunu</h2>
        <Board
          player={player}
          togglePlayer={togglePlayer}
          handleGameOver={handleGameOver}
          board={board}
          setBoard={setBoard}
        />
      </div>

      
      <div
        style={{
          backgroundColor:"lightseagreen",
          borderRadius:10,
          padding: "20px",
          marginLeft: "30px",
          width: "250px",
          textAlign: "center",
        }}
      >
        <h3>Aktif Oyuncu: {player}</h3>
        {winner && (
          <div>
            <h4 style={{ color: "green" }}>Kazanan: Oyuncu "{winner}"</h4>
            <button
              onClick={resetGame}
              style={{
                margin: "10px",
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              Oyunu Sıfırla
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
