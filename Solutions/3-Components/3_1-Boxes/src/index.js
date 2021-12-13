import React from "react";
import ReactDOM from "react-dom";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./Box4";
const App = () => {
  return (
    <div>
      <Box1 />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
