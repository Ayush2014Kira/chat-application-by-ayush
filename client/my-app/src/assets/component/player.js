import React from "react";

const Player = ({ position }) => {
const top = Math.floor((position - 1) / 10) * 60 + 10;
const left =
((position - 1) % 10) * 60 + (Math.floor((position - 1) / 10) % 2 === 0 ? 10 : 550);

return <div className="player"></div>;};

export default Player;