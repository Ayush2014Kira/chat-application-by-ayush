// Dice.js
import React from 'react';
import './dice.css';
import dice1 from "./dice-1.png"
import dice2 from "./dice-2.png"
import dice3 from "./dice-3.png"
import dice4 from "./dice-4.png"
import dice5 from "./dice-5.png"
import dice6 from "./dice-6.png"

const Dice = ({ value }) => {
const diceImages = [dice1,dice2,dice3,dice4,dice5,dice6
];
return (
<div className="dice">
<img src={diceImages[value - 1]} alt={`Dice ${value}`} />
</div>
);
};

export default Dice;