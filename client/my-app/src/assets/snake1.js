import React from "react";
import "./snake1.css";
import  snake1 from "./snake2.png"
import  snake2 from "./snake3.png"
import  snake3 from "./snake 6.png"
import  snake4 from "./snake 4.png"
import snake5 from "./snake 9.png"
import snake6 from "./snake10.png"
import snake7 from "./snake5.png"
import snake8 from "./snake 8.png"
const Snake = ({ start, end,  }) => {
  const cellSize = 64;
  const startX = ((start - 1) % 10) * cellSize;
  const startY = Math.floor((start - 1) / 10) * cellSize - cellSize;
  const endX = ((end - 1) % 10) * cellSize;
  const endY = Math.floor((end - 1) / 10) * cellSize - cellSize;
  const width = Math.abs(endX - startX) + cellSize;
  const height = cellSize;
  const style = {
    left: Math.min(startX, endX),
    bottom: startY,
    width,
    height,
  };
  return (
    <>
      <div className="snake" >
        <img src={ snake1}  alt = "snake"/>
      </div>
      <div className="snake1" start={24} end={2}>
        <img src={snake2} alt="snake1" />
      </div>
      <div className="snake2" start={35} end={18}>
        <img src={snake3} alt="snake1" />
      </div>
      <div className="snake3" start={62} end={46}>
        <img src={snake4} alt="snake1" />
      </div>
      <div className="snake4" start={82} end={69}>
        <img src={snake5} alt="snake1" />
      </div>
      <div className="snake5" start={92} end={88}>
        <img src={snake6} alt="snake1" />
      </div>
      <div className="snake6" start={97} end={78}>
        <img src={snake7} alt="snake1" />
      </div>
      <div className="snake7" start={47} end={32}>
        <img src={snake8} alt="snake1" />
      </div>

      {/* <img className='snake1' src={img} />
    <img className='snake1' src={img} />
    <img className='snake1' src={img} /><Snake start={47} end={32} />
        <Snake start={62} end={46} />
        <Snake start={73} end={56} />
        <Snake start={82} end={69}/>
        <Snake start={92} end={88} />
        <Snake start={97} end={78} />
    <img className='snake1' src={img} />
    <img className='snake1' src={img} />
    <img className='snake1' src={img} /> */}
    </>
  );
};

export default Snake;
