import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (i) => {
    setActiveIndex(i);
  };
  const renderedItems = () =>
    items.map((item, i) => {
      const active = i === activeIndex ? "active" : "";
      return (
        <React.Fragment key={item.title}>
          <div className={`title ${active}`} onClick={() => onTitleClick(i)}>
            <i className="dropdown icon"></i>
            {item.title}
          </div>
          <div className={`content ${active}`}>
            <p>{item.content}</p>
          </div>
        </React.Fragment>
      );
    });
  return (
    <div className="ui styled accordion">
      {renderedItems()} <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
