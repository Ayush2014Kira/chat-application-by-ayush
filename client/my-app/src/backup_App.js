import React, { useEffect, useState, useCallback } from "react";
import { socket } from "./context/socket";
import "././css/app.css";
import Errors from "./components/error";
import Hand from "./components/hand";
import Scoreboard from "./components/scoreboard";
import Roomcode from "./components/Roomcode";
import Picker from "./components/picker";
import Results from "./components/Results";
import Menu from "./page/menu";
import "./css/global.css";
export default function App() {
  const [players, setPlayers] = useState({ players: {} });
  const [winner, setWinner] = useState(false);
  const [room, setRoom] = useState("");
  const [color, setColor] = useState(undefined);

  const path = window.location.pathname.replace(/^.+\//, "");
  useEffect(() => {
    socket.on("players", (playerData, room) => {
      setPlayers(playerData);
      setRoom(room);
      window.history.replaceState("", "", room);
    });

    socket.on("rps-winner", (gameWinner) => {
      console.log(gameWinner);

      setTimeout(() => {
        setWinner(gameWinner);
        setTimeout(() => {
          setWinner(false);
          socket.emit("rps-reset");
        }, 3000);
      }, 3000);
    });
  }, []);

  let playerOne, playerTwo;

  if (Object.keys(players.players).length >= 1) {
    playerOne = Object.entries(players.players)[0][1];

    if (Object.keys(players.players).length === 2) {
      playerTwo = Object.entries(players.players)[1][1];
    }
  }

  const callback = useCallback((colors) => {
    setColor(colors);
  }, []);

  return (
    <>
      <div className="background">
        <div className="pattern"></div>
        <div className="pattern"></div>
        <div className="pattern"></div>
      </div>
      <Results winner={winner} draw={winner === "draw" ? true : false} />

      <Roomcode code={room} />
      <Scoreboard playerOne={playerOne} playerTwo={playerTwo} />

      <div className="hands">
        <Hand
          left={true}
          color={playerOne?.color}
          type={winner ? playerOne?.choice : "rock"}
          active={playerOne?.choice ? true : false}
          moving={
            playerOne?.choice && playerTwo?.choice
              ? winner
                ? false
                : true
              : false
          }
        />
        <Hand
          left={false}
          color={playerTwo?.color}
          type={winner ? playerTwo?.choice : "rock"}
          active={playerTwo?.choice ? true : false}
          moving={
            playerOne?.choice && playerTwo?.choice
              ? winner
                ? false
                : true
              : false
          }
        />
      </div>

      <Picker color={color} active={winner} />
      <Menu
        parentCallback={callback}
        active={room ? false : true}
        path={path}
      />
      <Errors />
    </>
  );
}
