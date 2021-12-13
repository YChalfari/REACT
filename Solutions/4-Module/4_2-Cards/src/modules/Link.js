import React from "react";

const Link = (props) => {
  return (
    <li>
      <a href="/" className="link">
        {props.text}
      </a>
    </li>
  );
};
export default Link;
