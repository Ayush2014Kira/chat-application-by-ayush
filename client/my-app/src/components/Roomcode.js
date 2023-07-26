import React from "react";
import Clipboard from "./../components/icon/clipboard";
import "./../css/components/room.css";

export default function Roomcode({ code }) {
  return (
    <div
      className={code ? "roomcode active" : "roomcode"}
      onClick={() => navigator.clipboard.writeText(code)}
    >
      <span className="code">{code ? code : "error"}</span>
      <Clipboard className="icon" />
    </div>
  );
}
