import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Fetch from "./Fetch";

function App() {
  const [toggle, setToggle] = useState(false);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, [toggle]);
  return (
    <div className="App">
      <button onClick={() => setToggle((prev) => !prev)}>
        {!toggle ? "Edit" : "Save"}
      </button>
      {toggle && <input ref={inputRef} type="text" />}
    </div>
  );
}

export default App;
