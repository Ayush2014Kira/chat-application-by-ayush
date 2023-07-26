// // import "./App.css";
// // import io from "socket.io-client";
// // import { useEffect, useState } from "react";

// // // const socket = io.connect("http://localhost:3001");
// // const MyComponent = () => {
// //   const [connected, setConnected] = useState(false);
// //   const [socket, setSocket] = useState(null);

// //   useEffect(() => {
// //     // Connect to the Socket.IO server
// //     const newSocket = io('http://localhost:3001');

// //     // Set the socket and the connection status
// //     setSocket(newSocket);
// //     setConnected(newSocket.connected);

// //     // Disconnect the socket when the component unmounts
// //     return () => {
// //       newSocket.disconnect();
// //       setSocket(null);
// //       setConnected(false);
// //     };
// //   }, []);

// //   return (
// //     <div>
// //       {connected ? (
// //         <p>Socket connection is established</p>
// //       ) : (
// //         <p>Socket connection is not established</p>
// //       )}
// //     </div>
// //   );
// // };
// // function App() {



// //   //Room State
// //   const [room, setRoom] = useState("");

// //   // Messages States
// //   const [message, setMessage] = useState("");
// //   const [messageReceived, setMessageReceived] = useState("");

// //   const joinRoom = () => {
// //     if (room !== "") {
// //       socket.emit("join_room", room);
// //     }
// //   };
// //   console.log("r", room, message);
// //   let stored = localStorage.getItem("room");

// //   var flag = {
// //     room: room,
// //     message: message,
// //   };

// //   var arr = [];
// //   arr.push(stored, flag);

// //   const sendMessage = () => {
// //     let msgObj = {
// //       message: message,
// //       room: room,
// //       send: true,
// //     };
// //     socket.emit("send_message", { msgObj, room });
// //     localStorage.setItem("room",JSON.stringify(arr))
// //   };

// //   useEffect(() => {
// //     alert("uppr")
// //     socket.on("testsocket", (data) => {
// //       console.log(data);
// //       alert("niche")
// //       setMessageReceived(data.msgObj.message);
// //       console.log("data", data);
// //       let msgObj = {
// //         message: data.msgObj.message,
// //         room: data.msgObj.room,
// //         receive: true,
// //       };
// //       console.log("received data", msgObj);
// //     });
// //   }, [socket]);

// //   return (
// //     <>
// //       <div className="App">
// //         <input
// //           placeholder="Room Number..."
// //           onChange={(event) => {
// //             setRoom(event.target.value);
// //           }}
// //         />
// //         <button onClick={joinRoom}>Join Room</button>
// //         <input
// //           placeholder="Message..."
// //           onChange={(event) => {
// //             setMessage(event.target.value);
// //           }}
// //         />
// //         <button onClick={sendMessage}>Send Message</button>
// //         <h1> Message:</h1>

// //         <div id="message">
// //           <p id="history">
// //             "room" : {room}
// //             <br />
// //             "message" :{messageReceived}
// //           </p>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default MyComponent;
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./App.css";
const socket = io("http://localhost:8001");

function App() {
  const [room, setRoom] = useState("");
  var [rooms, setRooms] = useState([]);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const[name,setName]=useState("")
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList([...messageList,{...data,sent:false} ]);
    });
  });
  
  var data = rooms

const result = data.reduce((r,room) => {
  if(r.get(room)) r.get(room).room.push(...room);
  else r.set(room, {room, room});
  return r;
}, new Map).values();
  

  const joinRoom = () => {
    socket.emit(name)
    socket.emit("join_room", room);
    console.log("rrrrrrrrrrr",room);
    setRooms([...rooms,room])
    console.log("rssssssssssssss",rooms);

  };
  console.log(room);
  const sendMessage = () => {
    const msgObj = {
      room: room,
      name: name,
      message: message,
    };

    socket.emit("send_message",msgObj);
    
    setMessageList([...messageList, {...msgObj,sent:true}]);
    setMessage("");
  };
  
  console.log(...messageList,message)
  rooms = rooms.filter(function (value, index, array) { 
    return array.indexOf(value) === index;
  });
  
  return (
    <div className="App">
      <div className="room">

      <input
        placeholder="Room Number..."
        value={room}
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      /> 
      <input
      placeholder="Name...."
      value={name}
      onChange={(event) => {
        setName(event.target.value);
      }}
    />
    </div>
      <button onClick={joinRoom}>Join Room</button>
      <br />
      <input
        placeholder="Message..."
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
        />
      <button onClick={sendMessage}>Send Message</button>
      <br />
      {rooms.map((room, index) => (
        
      <div key={index} data-id={room}>
        <h3>Room {room}</h3>
        <ul className="box row " style={{grid:"col-3"}}>
          {messageList
            .filter((msgObj) => msgObj.room === room)
            .map((msgObj, index) => (
              <li
                key={index}
                className={msgObj.sent ? "sent-message clear" : "received-message clear"}
              >
                {msgObj.name} : {msgObj.message}
              </li>
            ))}
        </ul>   </div>
    ))}
      {/* <ul className="box" style={{grid:"col-3"}}>
        
        {messageList.map((msgObj, index) => (
          <li key={index} className={msgObj.sent ? "sent-message" : "received-message"}
          >
            {msgObj.name} :{msgObj.message}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;



//  game palyer



// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";

// const socket = io("http://localhost:4000");

// function App() {
//   const [playerName, setPlayerName] = useState("");
//   const [opponentName, setOpponentName] = useState("");
//   const [gameStarted, setGameStarted] = useState(false);
//   const [playerChoice, setPlayerChoice] = useState("");
//   const [opponentChoice, setOpponentChoice] = useState("");
//   const [gameResult, setGameResult] = useState("");

//   useEffect(() => {
//     socket.on("opponentFound", (opponentName) => {
//       setOpponentName(opponentName);
//       setGameStarted(true);
//     });

//     socket.on("choiceMade", (opponentChoice) => {
//       setOpponentChoice(opponentChoice);
//     });

//     socket.on("gameResult", (result) => {
//       setGameResult(result);
//     });

//     socket.on("gameReset", () => {
//       setPlayerChoice("");
//       setOpponentChoice("");
//       setGameResult("");
//     });

//     return () => {
//       socket.off("opponentFound");
//       socket.off("choiceMade");
//       socket.off("gameResult");
//       socket.off("gameReset");
//     };
//   }, []);

//   const handleJoinGame = () => {
//     socket.emit("joinGame", playerName);
//   };

//   const handleMakeChoice = (choice) => {
//     setPlayerChoice(choice);
//     socket.emit("makeChoice", choice);
//   };

//   const handleResetGame = () => {
//     socket.emit("resetGame");
//   };

//   return (
//     <div>
//       {!gameStarted && (
//         <div>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             value={playerName}
//             onChange={(e) => setPlayerName(e.target.value)}
//           />
//           <button onClick={handleJoinGame}>Join game</button>
//         </div>
//       )}
//       {gameStarted && (
//         <div>
//           <h2>Player: {playerName}</h2>
//           <h2>Opponent: {opponentName}</h2>
//           {!playerChoice && (
//             <div>
//               <button onClick={() => handleMakeChoice("rock")}>Rock</button>
//               <button onClick={() => handleMakeChoice("paper")}>Paper</button>
//               <button onClick={() => handleMakeChoice("scissors")}>
//                 Scissors
//               </button>
//             </div>
//           )}
//           {playerChoice && !opponentChoice && <h2>Waiting for opponent...</h2>}
//           {playerChoice && opponentChoice && (
//             <div>
//               <h2>You chose: {playerChoice}</h2>
//               <h2>Opponent chose: {opponentChoice}</h2>
//               <h2>{gameResult}</h2>
//               <button onClick={handleResetGame}>Play again</button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
