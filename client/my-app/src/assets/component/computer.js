import React from "react";

const Computer = ({ position }) => {
const top = Math.floor((position - 1) / 10) * 60 + 30;
const left =
((position - 1) % 10) * 60 + (Math.floor((position - 1) / 10) % 2 === 0 ? 30 : 570);


 return <div className="computer"></div>;
};

export default Computer;