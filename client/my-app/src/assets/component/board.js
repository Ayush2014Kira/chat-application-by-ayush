import React from "react";

const Board = () => {
const rows = []; for (let i = 9; i >= 0; i--) {
    const row = [];
 
    for (let j = i * 10 + 1; j <= i * 10 + 10; j++) {
      row.push(
        <div className="square" key={j}>
          {j}
        </div>
      );
    }
 
    rows.push(
      <div className="row" key={i}>
        {row}
      </div>
    );
  }
 
  return <div className="board">{rows}</div>;
};

export default Board; 