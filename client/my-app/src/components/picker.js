import React, { useState, useEffect } from "react";
import "./../css/components/picker.css";
import { socket } from "./../context/socket";

export default function Picker({ active, color = "yellow" }) {
  const [isActive, setActive] = useState(true);

  function choice(type) {
    socket.emit("rps-choice", type);
    setActive(false);
  }

  useEffect(() => {
    setActive(active === false);
  }, [active]);

  return (
    <>
      <div className={isActive ? "picker active" : "picker"}>
        <div className="options">
          <img
            onClick={() => choice("rock")}
            className="image"
            src={require(`./../image/${color}-rock.png`)}
            alt="rock"
          />
          <img
            onClick={() => choice("paper")}
            className="image"
            src={require(`./../image/${color}-paper.png`)}
            alt="paper"
          />
          <img
            onClick={() => choice("scissors")}
            className="image"
            src={require(`./../image/${color}-scissors.png`)}
            alt="scissors"
          />
        </div>
      </div>
      
    </>
  );
}
