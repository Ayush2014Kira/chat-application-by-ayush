import React from "react";
import "./../css/components/scoreboard.css";

export default function Scoreboard({ playerOne, playerTwo }) {
  return (
    <>
      <div
        className={playerOne || playerTwo ? "scoreboard active" : "scoreboard"}
      >
        <div className="players">
          <div className="player">
            <span className="name">{playerOne?.name || "Waiting..."}</span>
            <span className="score">{playerOne?.score || "0"}</span>
          </div>
          <div className="player">
            <span className="name">{playerTwo?.name || "Waiting"}</span>
            <span className="score">{playerTwo?.score || "0"}</span>
          </div>
        </div>
      </div>
     
    </>
  );
}
