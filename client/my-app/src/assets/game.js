import React, { useState, useEffect } from 'react';
import './game.css';
import Board from "./board"
import Dice from "./dice"
import Player from "./player"
import Ladder from "./ladder"
import Snake from "./snake1"
import Computer from "./computer"

const Game = () => {
  const [playerPosition, setPlayerPosition] = useState(0);
  const [computerPosition, setComputerPosition] = useState(0);
  const [diceRoll, setDiceRoll] = useState(1);

  useEffect(() => {
    if (playerPosition >= 100) {
      alert('Congratulations! You won!');
    }
    if (computerPosition >= 100) {
      alert('Sorry, you lost!');
    }
  }, [playerPosition,computerPosition]);
console.log("player position",playerPosition);
console.log("computer position",computerPosition);
  const handleRollDice = () => {
    const newRoll = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(newRoll);
    console.log("playerposition",playerPosition);
    setPlayerPosition((pos) => {
      

      let newPosition = pos + newRoll;
      if(newPosition > 100){
        return getNewPositionAfterSnakesAndLadders(pos)
      }

      return getNewPositionAfterSnakesAndLadders(newPosition);
    });
    setComputerPosition((pos) => {
      let newPosition = pos + Math.floor(Math.random() * 6) + 1;
      console.log("new Positoion",newPosition);
      if(newPosition > 100){
        return getNewPositionAfterSnakesAndLadders(pos)
      }

      return getNewPositionAfterSnakesAndLadders(newPosition);
    });
  };

  const getNewPositionAfterSnakesAndLadders = (position) => {
    const snakes = [
      { start: 14, end: 7 },
      { start: 24, end: 2 },
      { start: 35, end: 18 },
      { start: 47, end: 32 },
      { start: 62, end: 46 },
      { start: 73, end: 56 },
      { start: 82, end: 69 },
      { start: 92, end: 88 },
      { start: 97, end: 78 },
    ];
    const ladders = [
      { start: 5, end: 36 },
      { start: 9, end: 22 },
      { start: 20, end: 65 },
      { start: 28, end: 53 },
      { start: 39, end: 59 },
      { start: 51, end: 72 },
      { start: 63, end: 84 },
      { start: 71, end: 91 },
      { start: 87, end: 94 },
    ];
    let newPosition = position;
    console.log("ayush",position);
    snakes.forEach((snake) => {
      if (position === snake.start) {
        newPosition = snake.end;
      }
    });
    ladders.forEach((ladder) => {
      if (position === ladder.start) {
        newPosition = ladder.end;
      }
    });
    return newPosition;
  };

  return (<>
    
    <div className="game">
      <Board size={100}>
        <Snake/>

       <Ladder start={5} end={36} /> 
       <Ladder start={9} end={22} />
       <Ladder start={20} end={65} />
       <Ladder start={28} end={53} />
       <Ladder start={39} end={59} />
       <Ladder start={51} end={72} />
       <Ladder start={63} end={84} />
       <Ladder start={71} end={91} />
       <Ladder start={87} end={94} />
       <Player position={playerPosition} />
       <Computer position={computerPosition} />
     </Board>
     <Dice value={diceRoll} />
     <button onClick={handleRollDice}>Roll Dice</button>
   </div>
  </>
 );
};

export default Game;