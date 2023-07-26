import React from 'react';
import './board.css';

// const Board = ({ size, children }) => {
// const renderCells = () => {
// const cells = [];

// for (let i = size; i >= 1; i--) {
// cells.push(<div key={i} className={`cell cell-${i}`}>{i}</div>);
// }
// return cells;
// };
// return (
//     <div className="board">
//       {renderCells()}
//       {children}
//     </div>
//   );
// };



const Board = ({children}) => {
  const renderCells = () => {
    const rows = [];
    let currentRow = [];
    let count = 100;
    for (let i = 10; i > 0; i--) {
      for (let j = 10; j > 0; j--) {
        if (i % 2 === 0) {
          currentRow.push(count);
        } else {
          currentRow.unshift(count);
        }
        count--;
      }
      rows.push(currentRow);
      currentRow = [];
    }
    return rows.map((row, index) => (
        
          row.map((cell) => (
          <div className={`cell cell-${cell}`} key={cell}>
            {cell}
          </div>
        ))
    ));
  };

  return <div className="board">
  {renderCells()}
  {children}
  </div>;
};

  export default Board;