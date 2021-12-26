import React, { useState } from "react";

const Display = ({ data, numOfChars }) => {
  const [showMore, setShowMore] = useState(false);
  // const [showLess, setShowLess] = useState(false);

  return (
    <div>
      <h4>{showMore ? data : `${data.substring(0, numOfChars)}...`}</h4>
      <button onClick={() => setShowMore(!showMore)}>
        Show {showMore ? "Less" : "More"}
      </button>
    </div>
  );
};

export default Display;
