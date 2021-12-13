import React from "react";
import Box4 from "./Box4";

const Box3 = () => {
  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        backgroundColor: "coral",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box4 />
      <Box4 />
    </div>
  );
};
export default Box3;
