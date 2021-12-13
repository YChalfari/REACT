import React from "react";

const Label = (props) => {
  return (
    <span style={{ color: props.color, fontSize: "1.3rem", fontWeight: "650" }}>
      {props.value}
    </span>
  );
};
export default Label;
