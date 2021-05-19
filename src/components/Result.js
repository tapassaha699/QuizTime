import React from "react";

const Result = ({score}) => (
  <div className="score-board">
    <div className="score"> { score<=2 ? "Failed" : "Passed"} !! </div>
    <h2 className="score"> Your score : {score} </h2>
    <h4> Passing score : 3/5 </h4>
  </div>
);

export default Result;
