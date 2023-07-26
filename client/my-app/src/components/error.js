import React from "react";
import { useState, useEffect } from "react";
import "./../css/components/errors.css";
import { socket } from "./../context/socket";

export default function Errors() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("error", (message) => {
      setMessage(message);

      setTimeout(() => {
        setMessage("");
      }, 3000);
    });
  }, []);

  return (
    <div className={message ? "errors active" : "errors"}>
      <p>{message}</p>
    </div>
  );
}
