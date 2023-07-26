import React from 'react';
import './cell.css';

const Cell = ({ value, children }) => {
return (
<div className={`cell cell-${value}`}>
{children}
</div>
);
};

export default Cell;