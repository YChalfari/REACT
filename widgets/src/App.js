import React from "react";
import Accordion from "./components/Accordion";

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
const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
