import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.function} className={props.class}>
      {props.text}
    </button>
  );
};
export default Button;
