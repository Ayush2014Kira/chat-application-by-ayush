const io = require("socket.io")(4000);

let players = [];

io.on("connection", (socket) => {
  console.log("New connection:", socket.id);

  socket.on("joinGame", (name) => {
    const player = { id: socket.id, name: name };
    players.push(player);

    if (players.length % 2 === 0) {
      const player1 = players[players.length - 2];
      const player2 = players[players.length - 1];
      io.to(player1.id).emit("opponentFound", player2);
      io.to(player2.id).emit("opponentFound", player1);
    }
  });

  socket.on("makeChoice", (data) => {
    const player = players.find((p) => p.id === socket.id);
    player.choice = data.choice;

    const opponent = players.find((p) => p.id !== socket.id);
    if (opponent.choice) {
      const result = calculateResult(player, opponent);
      io.to(player.id).emit("gameResult", { result: result });
      io.to(opponent.id).emit("gameResult", { result: result });
    } else {
      io.to(player.id).emit("choiceMade", data);
    }
  });

  socket.on("resetGame", () => {
    players.forEach((p) => {
      delete p.choice;
    });
    io.emit("gameReset");
  });

  socket.on("disconnect", () => {
    console.log("Disconnected:", socket.id);
    players = players.filter((p) => p.id !== socket.id);
  });
});

function calculateResult(player1, player2) {
  if (player1.choice === player2.choice) {
    return "Tie";
  } else if (
    (player1.choice === "rock" && player2.choice === "scissors") ||
    (player1.choice === "paper" && player2.choice === "rock") ||
    (player1.choice === "scissors" && player2.choice === "paper")
  ) {
    return `${player1.name} wins!`;
  } else {
    return `${player2.name} wins!`;
  }
}

export default calculateResult;