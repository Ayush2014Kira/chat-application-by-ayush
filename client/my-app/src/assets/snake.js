import React, { useState } from 'react';
import "./snake.css"
function App() {
  const [playerPosition, setPlayerPosition] = useState(0);
  const [computerPosition, setComputerPosition] = useState(0);
  const [message, setMessage] = useState('Roll the dice to start the game!');

  const rollDice = () => {
    const playerRoll = Math.floor(Math.random() * 6) + 1;
    const computerRoll = Math.floor(Math.random() * 6) + 1;

    const playerNewPosition = playerPosition + playerRoll;
    const computerNewPosition = computerPosition + computerRoll;

    // Check if player has won
    if (playerNewPosition >= 100) {
      setMessage('Congratulations, you have won the game!');
      setPlayerPosition(100);
      return;
    }

    // Check if computer has won
    if (computerNewPosition >= 100) {
      setMessage('Sorry, computer has won the game. Better luck next time!');
      setComputerPosition(100);
      return;
    }

    // Check if player has landed on a ladder or snake
    const playerLadder = checkLadder(playerNewPosition);
    const playerSnake = checkSnake(playerNewPosition);

    if (playerLadder) {
      setMessage(`You landed on a ladder and moved from ${playerPosition} to ${playerLadder.end}.`);
      setPlayerPosition(playerLadder.end);
    } else if (playerSnake) {
      setMessage(`You landed on a snake and moved from ${playerPosition} to ${playerSnake.end}.`);
      setPlayerPosition(playerSnake.end);
    } else {
      setMessage(`You rolled a ${playerRoll}. Your new position is ${playerNewPosition}.`);
      setPlayerPosition(playerNewPosition);
    }

    // Computer's turn
    const computerLadder = checkLadder(computerNewPosition);
    const computerSnake = checkSnake(computerNewPosition);

    if (computerLadder) {
      setMessage(`Computer landed on a ladder and moved from ${computerPosition} to ${computerLadder.end}.`);
      setComputerPosition(computerLadder.end);
    } else if (computerSnake) {
      setMessage(`Computer landed on a snake and moved from ${computerPosition} to ${computerSnake.end}.`);
      setComputerPosition(computerSnake.end);
    } else {
      setMessage(`Computer rolled a ${computerRoll}. Computer's new position is ${computerNewPosition}.`);
      setComputerPosition(computerNewPosition);
    }
  };

  const checkLadder = (position) => {
    return ladderList.find((ladder) => ladder.start === position);
  };

  const checkSnake = (position) => {
    return snakeList.find((snake) => snake.start === position);
  };

  const renderBoard = () => {
    const cells = [];

    for (let i = 0; i < 100; i++) {
      const cellNumber = i + 1;
      const isActive = playerPosition === cellNumber || computerPosition === cellNumber;
      cells.push(
        <div key={i} className={`cell ${isActive ? 'active' : ''}`}>
          {cellNumber}
        </div>
      );
    }

    return cells;
  };

  const ladderList = [    { start: 6, end: 27 },    { start: 12, end: 34 },    { start: 22, end: 38 },    { start: 41, end: 70 },    { start: 51, end: 67 },{ start: 71, end: 91 },
    { start: 85, end: 99 },
    ];
    
    const snakeList = [
    { start: 16, end: 6 },
    { start: 46, end: 25 },
    { start: 49, end: 11 },
    { start: 62, end: 19 },
    { start: 64, end: 60 },
    { start: 74, end: 53 },
    { start: 89, end: 68 },
    { start: 92, end: 88 },
    { start: 95, end: 75 },
    { start: 98, end: 78 },
    ];
    
    return (
    <div className="App">
    <h1>Snake and Ladder</h1>
    <div className="board">{renderBoard()}</div>
    <div className="game-info">
    <p>{message}</p>
    <button onClick={rollDice}>Roll Dice</button>
    </div>
    </div>
    );
    }
    
    export default App;