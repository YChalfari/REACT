import React from "react";

const Button = (props) => {
  return <button className={props.weight}>{props.text}</button>;
};
export default Button;
