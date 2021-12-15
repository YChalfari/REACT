import React from "react";

class Chameleon extends React.Component {
  render() {
    return (
      <div
        className={this.props.count <= 5 ? "square" : `square circle`}
        style={{ backgroundColor: randomColor() }}
      ></div>
    );
  }
}
export default Chameleon;

function randomNum() {
  return Math.floor(Math.random() * 256);
}
function randomColor() {
  const r = randomNum();
  const g = randomNum();
  const b = randomNum();
  return `rgb(${r},${g},${b})`;
}
