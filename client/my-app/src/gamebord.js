import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

function GameBoard(props) {
  const { player } = props;
  const [opponent, setOpponent] = useState(null);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [opponentChoice, setOpponentChoice] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    socket.on("opponentFound", (opponent) => {
      setOpponent(opponent);
    });

    socket.on("choiceMade", (data) => {
      if (data.player === player) {
        setPlayerChoice(data.choice);
      } else {
        setOpponentChoice(data.choice);
      }
    });

    socket.on("gameResult", (data) => {
      setResult(data.result);
      setPlayerChoice(null);
      setOpponentChoice(null);
    });

    socket.on("gameReset", () => {
      setResult(null);
    });
  }, [player]);

  function handleChoiceSelect(choice) {
    setPlayerChoice(choice);
    socket.emit("makeChoice", { player: player, choice: choice });
  }

  function renderChoiceButtons() {
    if (playerChoice === null) {
      return (
        <div>
          <h2>Select your choice:</h2>
          <button onClick={() => handleChoiceSelect("rock")}>Rock</button>
          <button onClick={() => handleChoiceSelect("paper")}>Paper</button>
          <button onClick={() => handleChoiceSelect("scissors")}>Scissors</button>
        </div>
      );
    } else {
      return null;
    }
  }

  function renderChoices() {
    if (playerChoice !== null && opponentChoice !== null) {
      return (
        <div>
          <h2>Your choice: {playerChoice}</h2>
          <h2>{opponent.name}'s choice: {opponentChoice}</h2>
        </div>
      );
    } else {
      return null;
    }
  }

  function renderResult() {
    if (result !== null) {
      return (
        <div>
          <h2>{result}</h2>
          <button onClick={() => socket.emit("resetGame")}>Play Again</button>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <h2>{player.name}</h2>
      {opponent ? <h2>{opponent.name}</h2> : null}
      {renderChoiceButtons()}
      {renderChoices()}
      {renderResult()}
    </div>
  );
}

export default GameBoard;