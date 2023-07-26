import React, { useState ,useEffect} from "react";
import "./../css/components/hand.css";

export default function Hand({
  type = "rock",
  left,
  color = "yellow",
  active,
  moving,
  
}) {
  let activeHand = left ? "activeLeft" : "activeRight";
  const [timer, setTimer] = useState(true);

  useEffect(() => {
    console.log("moving hand kk",moving)
    
      setTimeout(() => {
      
        setTimer(false);
        console.log("1");
      }, 5000);
    
  }, [moving]);

  return (
    <div className="hand">
        
        <img
          className={[
            left ? "image userChoice" : "image computerChoice ",
            moving ? "image moving" : "",
            active ? "" : activeHand,
          ].join(" ")}
          src={ moving ? require(`./../image/${color}-rock.png`) :
            require(`./../image/${color}-${type ? type : 'rock'}.png`)}
          alt="hand"
        />
    </div>
  );
}
