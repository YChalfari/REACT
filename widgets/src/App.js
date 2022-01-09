import React, { useState, useEffect } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import axios from "axios";
const items = [
  {
    title: "What is react?",
    content: "React is annoying?",
  },
  {
    title: "Why use react?",
    content: "React is favorite",
  },
  {
    title: "How to use react?",
    content: "Doing things",
  },
];
const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
  {
    label: "The Color green",
    value: "green",
  },
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
};

export default App;
