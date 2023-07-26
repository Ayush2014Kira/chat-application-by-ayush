// // App.js

// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import './App.css';

// const socket = io("http://localhost:8001");
// function Apptest() {
//   const [roomId, setRoomId] = useState('');
//   const [playerName, setPlayerName] = useState('');
//   const [opponentName, setOpponentName] = useState('');
//   const [playerChoice, setPlayerChoice] = useState('');
//   const [opponentChoice, setOpponentChoice] = useState('');
//   const [gameStatus, setGameStatus] = useState('');

//   useEffect(() => {
//     socket.on('connect', () => {
//       console.log('Connected to server!');
//     });

//     socket.on('joinedRoom', ({ playerName, opponentName }) => {
//       console.log(`Player ${playerName} joined the room.`);
//       setPlayerName(playerName);
//       setOpponentName(opponentName);
//     });

//     socket.on('gameStarted', () => {
//       console.log('Game started!');
//     });

//     socket.on('opponentChoice', ({ choice }) => {
//       console.log(`Opponent chose ${choice}.`);
//       setOpponentChoice(choice);
//     });

//     socket.on('gameResult', ({ result }) => {
//       console.log(`Game result: ${result}.`);
//       setGameStatus(result);
//     });

//     socket.on('gameRestart', () => {
//       console.log('Game restarted!');
//       setPlayerChoice('');
//       setOpponentChoice('');
//       setGameStatus('');
//     });

//     socket.on('disconnect', () => {
//       console.log('Disconnected from server.');
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   const handleJoinRoom = () => {
//     if (roomId && playerName) {
//       socket.emit('joinRoom', { roomId, playerName });
//     }
//   };

//   const handlePlayerChoice = (choice) => {
//     if (!playerChoice) {
//       setPlayerChoice(choice);
//       socket.emit('playerChoice', { choice });
//     }
//   };

//   const handleRestartGame = () => {
//     socket.emit('restartGame');
//   };

//   return (
//     <div className="App">
//       {!playerName ? (
//         <div>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             value={playerName}
//             onChange={(e) => setPlayerName(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Enter room ID"
//             value={roomId}
//             onChange={(e) => setRoomId(e.target.value)}
//           />
//           <button onClick={handleJoinRoom}>Join Room</button>
//         </div>
//       ) : (
//         <div>
//           <h1>Rock Paper Scissors</h1>
//           <h2>Room: {roomId}</h2>
//           <h3>{playerName} vs {opponentName}</h3>
//           <div className="hands">
//             <div className="hand paper" onClick={() => handlePlayerChoice('paper')}>
//               <img src="./Paper.png" alt="paper-hand" />
//             </div>
//             <div className="hand scissors" onClick={() => handlePlayerChoice('scissors')}>
//               <img src="./Scissors.png" alt="scissors-hand" />
//             </div>
//             <div className="hand rock" onClick={() => handlePlayerChoice('rock')}>
//               <img src="./Rock.png" alt="rock-hand" />
//             </div>
//           </div>
//           <div className="contest">
//             <div className="userhand">
//               <h4>{playerName}</h4>
// {playerChoice && (
// <img src={'./${playerChoice}.png'} alt={'${playerChoice}-hand'} />
// )}
// </div>
// <div className="computerhand">
// <h4>{opponentName}</h4>
// {opponentChoice && (
// <img src={'./${opponentChoice}.png'} alt={'${opponentChoice}-hand'} />
// )}
// </div>
// </div>
// {gameStatus && (
// <div>
// <h2>{gameStatus}</h2>
// <button onClick={handleRestartGame}>Restart Game</button>
// </div>
// )}
// </div>
// )}
// </div>
// );
// }

// export default Apptest;
//  perfect
// import React, { useState } from 'react';

// const ROCK = 'rock';
// const PAPER = 'paper';
// const SCISSORS = 'scissors';

// const Game = () => {
//   const [player1Choice, setPlayer1Choice] = useState(null);
//   const [player2Choice, setPlayer2Choice] = useState(null);
//   const [winner, setWinner] = useState(null);

//   const handlePlayer1Choice = (choice) => {
//     setPlayer1Choice(choice);
//     if (player2Choice !== null) {
//       determineWinner(choice, player2Choice);
//     }
//   };

//   const handlePlayer2Choice = (choice) => {
//     setPlayer2Choice(choice);
//     if (player1Choice !== null) {
//       determineWinner(player1Choice, choice);
//     }
//   };

//   const determineWinner = (player1Choice, player2Choice) => {
//     if (player1Choice === player2Choice) {
//       setWinner('Tie');
//     } else if (
//       (player1Choice === ROCK && player2Choice === SCISSORS) ||
//       (player1Choice === PAPER && player2Choice === ROCK) ||
//       (player1Choice === SCISSORS && player2Choice === PAPER)
//     ) {
//       setWinner('Player 1');
//     } else {
//       setWinner('Player 2');
//     }
//   };

//   return (
//     <div>
//       <h1>Rock Paper Scissors Game</h1>
//       <p>{`Player 1's choice: ${player1Choice}`}</p>
//       <p>{`Player 2's choice: ${player2Choice}`}</p>
//       {winner ? (
//         <p>{`Winner: ${winner}`}</p>
//       ) : (
//         <div>
//           <button onClick={() => handlePlayer1Choice(ROCK)}>Rock</button>
//           <button onClick={() => handlePlayer1Choice(PAPER)}>Paper</button>
//           <button onClick={() => handlePlayer1Choice(SCISSORS)}>Scissors</button>
//           <br />
//           <br />
//           <button onClick={() => handlePlayer2Choice(ROCK)}>Rock</button>
//           <button onClick={() => handlePlayer2Choice(PAPER)}>Paper</button>
//           <button onClick={() => handlePlayer2Choice(SCISSORS)}>Scissors</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Game;


import React, { useState } from 'react';

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

const Game = () => {
  const [player1Choice, setPlayer1Choice] = useState(null);
  const [player2Choice, setPlayer2Choice] = useState(null);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({ player1: 0, player2: 0 });

  const handlePlayer1Choice = (choice) => {
    setPlayer1Choice(choice);
    if (player2Choice !== null) {
      determineWinner(choice, player2Choice);
    }
  };

  const handlePlayer2Choice = (choice) => {
    setPlayer2Choice(choice);
    if (player1Choice !== null) {
      determineWinner(player1Choice, choice);
    }
  };

  const determineWinner = (player1Choice, player2Choice) => {
    if (player1Choice === player2Choice) {
      setWinner('Tie');
    } else if (
      (player1Choice === ROCK && player2Choice === SCISSORS) ||
      (player1Choice === PAPER && player2Choice === ROCK) ||
      (player1Choice === SCISSORS && player2Choice === PAPER)
    ) {
      setWinner('Player 1');
      setScore({ ...score, player1: score.player1 + 1 });
    } else {
      setWinner('Player 2');
      setScore({ ...score, player2: score.player2 + 1 });
    }

    // Reset player choices and winner state after a winner is determined
    setTimeout(() => {
      setPlayer1Choice(null);
      setPlayer2Choice(null);
      setWinner(null);
    }, 2000);
  };

  return (
    <div>
      <h1>Rock Paper Scissors Game</h1>
      <p>{`Player 1's choice: ${player1Choice}`}</p>
      <p>{`Player 2's choice: ${player2Choice}`}</p>
      
        <div>
          <p>{`Winner: ${winner}`}</p>
          <p>{`Player 1 score: ${score.player1}`}</p>
          <p>{`Player 2 score: ${score.player2}`}</p>
        </div>
    
        <div>
          <button onClick={() => handlePlayer1Choice(ROCK)}>Rock</button>
          <button onClick={() => handlePlayer1Choice(PAPER)}>Paper</button>
          <button onClick={() => handlePlayer1Choice(SCISSORS)}>Scissors</button>
          <br />
          <br />
          <button onClick={() => handlePlayer2Choice(ROCK)}>Rock</button>
          <button onClick={() => handlePlayer2Choice(PAPER)}>Paper</button>
          <button onClick={() => handlePlayer2Choice(SCISSORS)}>Scissors</button>
        </div>
    
    </div>
  );
};

export default Game;

