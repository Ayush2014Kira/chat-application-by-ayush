import React,{useState,useEffect} from 'react';
import "./../../../../assets/css/Dashboard/rps game/hand.css"


function Hands({ active, color = "yellow" }) {
  const handOptions = {
    "rock": require(`./../image/${color}-rock.png`) ,
    "paper": require(`./../image/${color}-paper.png`),
    "scissors": require(`./../image/${color}-scissors.png`)
}
let SCORE = 0;

  const pickUserHand = (hand) =>{
    const [isActive, setActive] = useState(true);

    function choice(type) {
      setActive(false);
    }
  
    useEffect(() => {
      setActive(active === false);
    }, [active]);
  
    console.log(hand);
    //hide the current page
   

    //set the user hand pick
    document.getElementById("userPickImage").src = handOptions[hand];

    let cpHand = pickComputerHand();
    referee(hand, cpHand);
}

const pickComputerHand = (hand) =>{
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random()*3)]

    //set the computer hand pick
    document.getElementById("computerPickImage").src = handOptions[cpHand];

    return cpHand;
}

const referee = (userHand, cpHand) => {
    if (userHand === "paper" && cpHand === "scissors") {
        setDecision("YOU LOSE!");
    }
    if (userHand === "paper" && cpHand === "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    }
    if (userHand ==="paper" && cpHand === "paper") {
    setDecision("It's a tie!");
    }
    if (userHand === "rock" && cpHand === "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    }
    if (userHand === "rock" && cpHand === "paper") {
    setDecision("YOU LOSE!");
    }
    if (userHand === "rock" && cpHand === "rock") {
    setDecision("It's a tie!");
    }
    if (userHand === "scissors" && cpHand === "scissors") {
    setDecision("It's a tie!");
    }
    if (userHand === "scissors" && cpHand === "rock") {
    setDecision("YOU LOSE!");
    }
    if (userHand === "scissors" && cpHand === "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    }

};


const restartGame = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";

    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
}

const setDecision = (decision) => {
    document.querySelector(".descission h1").innerText = decision;
}

const setScore = (newScore) => {
    SCORE = newScore;
    document.querySelector(".score h1").innerText = newScore;
}
    return (
        <>
        <div className={isActive ? "picker active" : "picker"}>
            <div className="hands">
                <div className="hand paper">
                    <img src={require(`./../image/${color}-paper.png`)} alt="paper-hand" onClick={()=>{pickUserHand('paper')}}/>
                </div>
                <div className="hand scissors">
                    <img src={require(`./../image/${color}-scissors.png`)} alt="scissors-hand" onClick={()=>{pickUserHand('scissors')}}/>
                </div>
                <div className="hand rock">
                    <img src={require(`./../image/${color}-rock.png`)} alt="rock-hand" onClick={()=>{pickUserHand('rock')}}/>
                </div>
            </div>
            <div className="contest">
                <div className="userhand">
                    <h1>YOU PICKED</h1>
                    <div className="handImageContainer">
                        <img id="userPickImage" src={require(`./../image/${color}-paper.png`)} alt="paper-hand" />
                    </div>
                </div>
                <div className="referee">
                    <div className="descission">
                        <h1>YOU WIN</h1>
                    </div>
                    <div className="NewGame" onClick={()=>restartGame()} >PLAY AGAIN</div>
                </div>
                <div className="computerhand">
                <h1>THE HOUSE PICKED</h1>
                    <div className="handImageContainer">
                        <img id="computerPickImage" src={require(`./../image/${color}-rock.png`)} alt="rock-hand" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hands
