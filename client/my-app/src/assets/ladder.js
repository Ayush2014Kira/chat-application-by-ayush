import React from 'react';
import './ladder.css';

const Ladder = ({ start, end }) => {
  const cellSize = 64;
  // console.log("hii",start);
  // console.log("end",end);
  const startX = (start - 1) % 10 * cellSize;
  const startY =  Math.floor((start - 1) / 10) * cellSize;
  const endX = (end - 1) % 10 * cellSize;
  const endY =  Math.floor((end - 1) / 10) * cellSize;

  const ladderStyle = {
    left: startX,
    bottom: startY,
    width: cellSize,
    height: startY - endY,
  };

  const stepStyle = {
    height: cellSize / 2,
    width: cellSize / 2,
    backgroundColor: '#fff',
    borderRadius: '50%',
    position: 'absolute',
    bottom: endY,
    left: endX + cellSize / 4,
    zIndex: 2,
  };
  // console.log(stepStyle);

  return (
    <div className="Ladder" style={ladderStyle}>
      <div className="Step" style={stepStyle} />
      <div className="Step" style={{ ...stepStyle, bottom: endY + cellSize / 2 }} />
    </div>
  );
};

export default Ladder;
