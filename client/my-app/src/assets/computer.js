import React from "react";
import "./computer.css";
import PointerPositionComputer from "./PointerPositionComputer.json";
const Computer = ({ position }) => {
  // const cellSize = 64;
  console.log("computer intial",position);
  // const x = Math.floor ((position - 1) % 10) * cellSize;
  // const y = Math.floor((position - 1) / 10) * cellSize;
  const x = PointerPositionComputer[position].left;
  const y = PointerPositionComputer[position].bottom;
  console.log("left", x);
  console.log("bottom", y);
  return (
    <div
      className="computer"
      style={{ left: parseInt(x), bottom: parseInt(y) }}
    ></div>
  );
};

export default Computer;
