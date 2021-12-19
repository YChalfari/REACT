import React from "react";

const Name = (props) => {
  const renderNames = () => props.names.map((name) => <p>{name}</p>);
  return <>{props.names && renderNames()}</>;
};
export default Name;
