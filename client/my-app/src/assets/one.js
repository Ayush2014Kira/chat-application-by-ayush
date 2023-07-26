import React, { useState } from 'react';
import './one.css';
import ladderImg from './ladder.png';
import snakeImg from './snake.png';

const App = () => {
  const [playerPosition, setPlayerPosition] = useState(1);
  const [computerPosition, setComputerPosition] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [playerRoll, setPlayerRoll] = useState(0);
  const [computerRoll, setComputerRoll] = useState(0);
  
  const rollDice = () => {
    const playerRollResult = Math.ceil(Math.random() * 6);
    const computerRollResult = Math.ceil(Math.random() * 6);
    setPlayerPosition((position) => Math.min(position + playerRollResult, 100));
    setComputerPosition((position) => Math.min(position + computerRollResult, 100));
    setPlayerRoll(playerRollResult);
    setComputerRoll(computerRollResult);
    setShowResult(true);
  };

  const renderBoard = () => {
    const cells = [];
    const ladderList = [
        { start: 3, end: 39 },
        { start: 10, end: 12 },
        { start: 27, end: 53 },
        { start: 56, end: 84 },
        { start: 61, end: 99 },
        { start: 72, end: 90 }
      ];
      
      const snakeList = [
        { start: 17, end: 7 },
        { start: 34, end: 20 },
        { start: 47, end: 25 },
        { start: 64, end: 42 },
        { start: 87, end: 36 },
        { start: 93, end: 73 }
      ];
    for (let i = 0; i < 100; i++) {
      const cellNumber = i + 1;
      const isActive = playerPosition === cellNumber || computerPosition === cellNumber;
      const ladder = ladderList.find((ladder) => ladder.start === cellNumber);
      const snake = snakeList.find((snake) => snake.start === cellNumber);

      cells.push(
        <div key={i} className={`cell ${isActive ? 'active' : ''}`}>
          {ladder && <img src={ladderImg} alt="ladder" className="ladder" style={{ left: ladderLeft(ladder.start), top: ladderTop(ladder.start) }} />}
          {snake && <img src={snakeImg} alt="snake" className="snake" style={{ left: snakeLeft(snake.start), top: snakeTop(snake.start) }} />}
          {cellNumber}
        </div>
      );
    }

    return cells;
  };

  const ladderLeft = (position) => {
    const column = (position - 1) % 10;
    const row = 9 - Math.floor((position - 1) / 10);
    const isEvenRow = row % 2 === 0;

    if (isEvenRow) {
      return `${column * 10 + 5}%`;
    } else {
      return `${(9 - column) * 10 + 5}%`;
    }
  };

  const ladderTop = (position) => {
    const row = 9 - Math.floor((position - 1) / 10);
    return `${row * 10}%`;
  };

  const snakeLeft = (position) => {
    const column = (position - 1) % 10;
    const row = 9 - Math.floor((position - 1) / 10);
    const isEvenRow = row % 2 === 0;

    if (isEvenRow) {
      return `${column * 10 + 5}%`;
    } else {
      return `${(9 - column) * 10 + 5}%`;
    }
  };

  const snakeTop = (position) => {
    const row = 9 - Math.floor((position - 1) / 10);
    const isEvenRow = row % 2 === 0;

    if (isEvenRow) {
      return `${row * 10 + 5}%`;
    } else {
      return `${row * 10}%`;
    }
  };

  return (
<>
<div className="board">
{renderBoard()}
</div>
<div className="buttons">
<button onClick={rollDice}>Roll Dice</button>
{showResult && (
<div className="result">
<div>
<div>Player rolled: {playerRoll}</div>
<div>Player moved to: {playerPosition}</div>
</div>
<div>
<div>Computer rolled: {computerRoll}</div>
<div>Computer moved to: {computerPosition}</div>
</div>
</div>
)}
</div>
</>
);
};

export default App;