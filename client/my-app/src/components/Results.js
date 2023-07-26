import React from "react";
import "./../css/components/result.css";

export default function Results({ winner, draw }) {
console.log("winner1",winner);
console.log("draw",draw);
    return (
        <div className="results">
            <div className={ winner ?  "wrapper active" : "wrapper"}>
                {draw ?
                    <div className="text">
                        <span>it's a</span>
                        <span>draw!</span>
                    </div>
                    :
                    <div className="text">
                        <span>{winner.name}</span>
                        <span>won!</span>
                    </div>
                }
            </div>
        </div>
    );
}