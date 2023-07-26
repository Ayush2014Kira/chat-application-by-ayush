// utils.js
const ladders = [
    { start: 4, end: 14 },
    { start: 9, end: 31 },
    { start: 20, end: 38 },
    { start: 28, end: 84 },
    { start: 40, end: 59 },
    { start: 51, end: 67 },
    { start: 63, end: 81 },
    { start: 71, end: 91 },
    { start: 87, end: 94 },
  ];
  
  const snakes = [
    { start: 17, end: 7 },
    { start: 54, end: 34 },
    { start: 62, end: 19 },
    { start: 64, end: 60 },
    { start: 87, end: 24 },
    { start: 93, end: 73 },
    { start: 95, end: 75 },
    { start: 99, end: 78 },
  ];
  
  export const getNewPosition = (position, value) => {
    const newPosition = position + value;
    return newPosition <= 100 ? newPosition : position;
  };
  
  export const checkLadder = (position) => {
    return ladders.find((ladder) => ladder.start === position);
  };
  
  export const checkSnake = (position) => {
    return snakes.find((snake) => snake.start === position);
  };
  

