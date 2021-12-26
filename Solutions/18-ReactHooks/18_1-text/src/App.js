import React from "react";
import Display from "./components/Display";
import data from "./components/data";
const App = () => {
  return (
    <div>
      <Display data={data} numOfChars={40} />
    </div>
  );
};

export default App;
