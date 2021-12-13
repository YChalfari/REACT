import React from "react";
import Box3 from "./Box3";
const Box2 = () => {
  return (
    <div
      style={{
        width: "350px",
        height: "250px",
        backgroundColor: "blue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box3 />
    </div>
  );
};
export default Box2;
