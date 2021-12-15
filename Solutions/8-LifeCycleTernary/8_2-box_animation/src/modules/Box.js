import React from "react";

const Box = (props) => {
  return (
    <div
      className={`box ${props.shown}`}
      style={{ width: props.size, height: props.size }}
    ></div>
  );
};
export default Box;
