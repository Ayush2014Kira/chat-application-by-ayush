const express = require("express");
const app = express();
const http = require("http");
// const { Server } = require("socket.io");
const Server  = require("socket.io").Server

const cors = require("cors");

app.use(cors());

const server  = http.createServer(app)
const io = new Server(server , {
    cors:{
        origin:"*"
    }
})
// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",    
//     methods: ["GET", "POST"],
//   },
// });

io.on("connection", (socket) => {
  console.log("trstss");
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  // const io = require('socket.io')(3000);

  // io.on('connection', (socket) => {
  //   console.log('A user connected');
  
  //   socket.on('message', (data) => {
  //     console.log(`Received message: ${data}`);
  //     // Send the received message back to all connected clients
  //     io.emit('message', data);
  //   });
  
  //   socket.on('disconnect', () => {
  //     console.log('A user disconnected');
  //   });
  // });
  


  socket.on("send_message", (data) => {
    console.log("dsada send",data);
    socket.to(data.room).emit("receive_message", data);
  });
});

server.listen(8001, () => {
  console.log("SERVER IS RUNNING");
});


// test
// const express = require("express");
// const http = require("http");
// const socketIo = require("socket.io");

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// // Set the CORS headers
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

// const PORT = process.env.PORT || 4000;

// let waitingPlayer = null;

// io.on("connection", (socket) => {
//   console.log("New client connected");

//   socket.on("joinGame", (name) => {
//     console.log(name + " joined the game");

//     if (waitingPlayer) {
//       // Found an opponent
//       const player1 = waitingPlayer;
//       const player2 = { id: socket.id, name: name };
//       waitingPlayer = null;

//       console.log(player1.name + " vs " + player2.name);

//       // Emit opponentFound events to both players
//       io.to(player1.id).emit("opponentFound", player2);
//       io.to(player2.id).emit("opponentFound", player1);
//     } else {
//       // Waiting for an opponent
//       waitingPlayer = { id: socket.id, name: name };

//       console.log(name + " is waiting for an opponent");
//     }
//   });

//   socket.on("makeChoice", (data) => {
//     console.log(socket.id + " chose " + data.choice);

//     // Find the player's opponent
//     const opponent = getOpponent(socket.id);

//     // Emit choiceMade event to the opponent
//     io.to(opponent.id).emit("choiceMade", { choice: data.choice });

//     // Determine the game result
//     const result = getResult(data.choice, opponent.choice);

//     // Emit gameResult events to both players
//     io.to(socket.id).emit("gameResult", { result: result });
//     io.to(opponent.id).emit("gameResult", { result: reverseResult(result) });
//   });

//   socket.on("resetGame", () => {
//     console.log("Resetting game");

//     // Find the player's opponent
//     const opponent = getOpponent(socket.id);

//     // Emit gameReset events to both players
//     io.to(socket.id).emit("gameReset");
//     io.to(opponent.id).emit("gameReset");
//   });

//   socket.on("disconnect", () => {
//     console.log("Client disconnected");

//     if (waitingPlayer && waitingPlayer.id === socket.id) {
//       waitingPlayer = null;
//     } else {
//       // Find the player's opponent and emit a gameReset event to them
//       const opponent = getOpponent(socket.id);
//       if (opponent) {
//         io.to(opponent.id).emit("gameReset");
//       }
//     }
//   });
// });

// function getOpponent(id) {
//   const clients = io.sockets.sockets;
//   for (const clientId in clients) {
//     if (clientId !== id) {
//       return clients[clientId];
//     }
//   }
//   return null;
// }

// function getResult(choice1, choice2) {
//   if (choice1 === choice2) {
//     return "Tie!";
//   } else if (choice1 === "rock") {
//     if (choice2 === "paper") {
//       return "Player 2 wins!";
//     } else {
//       return "Player 1 wins!";
//     }
//   } else if (choice1 === "paper") {
//     if (choice2 === "scissors") {
//       return "Player 2 wins!";
//     } else {
//       return "Player 1 wins!";
//     }
//   } else if (choice1 === "scissors") {
//     if (choice2 === "rock") {
//       return "Player 2 wins!";
//     } else {
//       return "Player 1 wins!";
//     }
//   } else {
//     return "Invalid input. Please enter 'rock', 'paper', or 'scissors'.";
//   }
// }
