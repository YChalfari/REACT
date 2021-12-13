import React from "react";
import ReactDOM from "react-dom";
import QuizTitle from "./QuizTitle";
import Q1 from "./Q1";

import Q2 from "./Q2";

const Quiz = () => {
  return (
    <div style={{ border: "1px solid black", height: "60vh" }}>
      <QuizTitle />
      <Q1 />
      <Q2 />
    </div>
  );
};

ReactDOM.render(<Quiz />, document.querySelector("#root"));
