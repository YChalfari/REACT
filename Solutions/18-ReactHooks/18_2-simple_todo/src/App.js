import React, { useState } from "react";
import "./App.css";
const data = [
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Learn React", completed: false },
  { name: "Learn mongoDB", completed: false },
  { name: "Learn Node JS", completed: false },
];
const App = () => {
  const [list, setList] = useState([...data]);
  const toggleCompleted = (i) => {
    const temp = [...list];
    temp[i].completed = !temp[i].completed;
    setList([...temp]);
  };
  const renderList = () =>
    list.map((li, i) => (
      <div key={li.name} onClick={() => toggleCompleted(i)}>
        <h4 className={li.completed ? "completed" : null}>
          {li.name}{" "}
          <span>
            {li.completed
              ? String.fromCharCode(2713)
              : String.fromCharCode(2715)}
          </span>
        </h4>
      </div>
    ));
  return (
    <div>
      <h1>WHY IS String.fromCharCode(2713) NOT GIVING ME A CHECK MARK?</h1>
      {renderList()}
    </div>
  );
};

export default App;
