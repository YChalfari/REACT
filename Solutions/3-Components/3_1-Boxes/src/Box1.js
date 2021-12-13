import React from "react";
import Box2 from "./Box2";

const Box1 = () => {
  return (
    <div
      style={{
        width: "400px",
        height: "300px",
        backgroundColor: "green",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box2 />
    </div>
  );
};
export default Box1;
