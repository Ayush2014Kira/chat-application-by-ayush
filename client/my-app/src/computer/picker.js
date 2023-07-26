import { useState, useEffect } from "react";
import Hand from "../components/hand";

export default function Picker1({ active, draw }) {
  const [isActive, setActive] = useState(true);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState();
  const [winner, setWinner] = useState(null);
  const [uscore, setUscore] = useState(0);
  const [cscore, setCscore] = useState(0);
  const [uname, setUname] = useState("");
  function choice(choice) {
    setUserChoice(choice);
    setActive(false);

    const computer = computerChoose();
    setComputerChoice(computer);

    console.log("User Choice ", choice);

    console.log("Comp Choice ", computer);
    setTimeout(() => {

      let w = determineWinner(choice, computer)
      console.log("set winner",w);
      setWinner(w);
    },5000);
  }

  function computerChoose() {
    const choices = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function determineWinner(userChoice, computerChoice) {
    console.log("userchoice",userChoice);
    console.log("computerrhoice",computerChoice);

      console.log("hii i enter the time out")
      if (userChoice === computerChoice) {
        console.log("1");
        return "draw";
      } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
        console.log("2");
        setUscore(uscore+1)
        return "user";
      } else {
        console.log("3");
        setCscore(cscore+1)
        return "computer";
      }
   
  }

  useEffect(() => {
    if (userChoice && computerChoice) {

   setTimeout(() => {

    let w = determineWinner(userChoice, computerChoice)
    console.log("set winner",w);
    setWinner(w);
  },5000);

    }
  }, [userChoice, computerChoice]);

  function resetGame() {
    setActive(true);
    setUserChoice(null);
    setComputerChoice(null);
   setWinner(null);
  }

  return (
    <div>
      <div className="results">
        {winner !== null && (
          <div className={winner ? "wrapper active" : "wrapper"}>
            {winner === "draw" ? (
              <div className="text">
                <span>It's a draw!</span>
                <button onClick={resetGame}>Play Again</button>
              </div>
            ) : (
              <div className="text">
                <span>{winner === "user" ? "You" : "Computer"}</span>
                <span> won!</span>
                <button onClick={resetGame}>Play Again</button>
              </div>
            )}
          </div>
        )}
      </div>

      <div className={isActive ? "picker active" : "picker"}>
        <div className="options">
          <img
            onClick={() => choice("rock")}
            className="image"
            src={require(`./../image/yellow-rock.png`)}
            alt="rock"
          />
          <img
            onClick={() => choice("paper")}
            className="image"
            src={require(`./../image/yellow-paper.png`)}
            alt="paper"
          />
          <img
            onClick={() => choice("scissors")}
            className="image"
            src={require(`./../image/yellow-scissors.png`)}
            alt="scissors"
          />
        </div>
      </div>
      <div className="hands">
        <Hand
          left={true}
          type={userChoice}
          active={userChoice ? true : false}
          moving={
            userChoice && computerChoice ? (winner ? false : true) : false
          }
        />

        <Hand
          left={false}
          type={computerChoice}
          active={computerChoice ? true : false}
          moving={
            userChoice && computerChoice ? (winner ? false : true) : false
          }
        />
      </div>
      <div className= "scoreboard active" >
        <div className="players">
          <div className="player">
            <span className="name">user</span>
            <span className="score">{uscore}</span>
          </div>
          <div className="player">
            <span className="name">Computer</span>
            <span className="score">{cscore}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
