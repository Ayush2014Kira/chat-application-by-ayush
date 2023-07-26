import React from 'react';
import './player.css';
import PointerPosition from "./PointerPosition.json"
const Player = ({ position }) => {
const cellSize = 64;
console.log("intial posstoion",position);
const posx =Math.floor((position -1) % 10) * cellSize;
const posy = Math.floor((position - 1) / 10) * cellSize;
const x = PointerPosition[position].left
const y = PointerPosition[position].bottom
// console.log("posx old",posx);
// console.log("posy old",posy);
console.log("palyer Position",position);
console.log("styel x",x);
console.log("styel y",y);
return (
<div className="player" style={{ left: parseInt(x) , bottom: parseInt(y) }}></div>
);
};  

export default Player;