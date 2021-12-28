import React, { useState } from "react";
import "./App.css";
import Fetch from "./Fetch";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
      {toggle && <Fetch />}
    </div>
  );
}

export default App;
