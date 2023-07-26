import React, { useState } from "react";
import Board from "./Board";
import Player from "./Player";
import Computer from "./Computer";
import { getNewPosition, checkLadder, checkSnake } from "./utils";

const Game = () => {
const [playerPosition, setPlayerPosition] = useState(1);
const [computerPosition, setComputerPosition] = useState(1);
const [message, setMessage] = useState(""); const rollDice = () => {
    const value = Math.floor(Math.random() * 6) + 1;
 
    const newPlayerPosition = getNewPosition(playerPosition, value);
    const ladder = checkLadder(newPlayerPosition);
    const snake = checkSnake(newPlayerPosition);
 
    if (ladder) {
      setMessage(`You climbed a ladder from ${ladder.start} to ${ladder.end}!`);
      setPlayerPosition(ladder.end);
    } else if (snake) {
      setMessage(`You got bitten by a snake from ${snake.start} to ${snake.end}!`);
      setPlayerPosition(snake.end);
    } else {
      setPlayerPosition(newPlayerPosition);
    }
 
    const newComputerPosition = getNewPosition(computerPosition, value);
    const ladder2 = checkLadder(newComputerPosition);
    const snake2 = checkSnake(newComputerPosition);
 
    if (ladder2) {
      setMessage(`The computer climbed a ladder from ${ladder2.start} to ${ladder2.end}!`);
      setComputerPosition(ladder2.end);
    } else if (snake2) {
      setMessage(`The computer got bitten by a snake from ${snake2.start} to ${snake2.end}!`);
      setComputerPosition(snake2.end);
    } else {
      setComputerPosition(newComputerPosition);
    }
  };
 
  return (
    <div className="game">
      <div className="board-container">
        <Board />
        <Player position={playerPosition} />
        <Computer position={computerPosition} />
      </div>
      <div className="message">{message}</div>
      <button className="button" onClick={rollDice}>
        Roll Dice
      </button>
    </div>
  );
};

export default Game; 