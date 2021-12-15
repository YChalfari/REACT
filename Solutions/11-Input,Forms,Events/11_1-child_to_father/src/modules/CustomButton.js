import React from "react";

class CustomButton extends React.Component {
  state = { color: this.props.color };
  handleButtonClick = (e) => this.props.onClick(this.state.color);

  render() {
    return (
      <button
        onClick={this.handleButtonClick}
        className="btn"
        style={{ backgroundColor: this.props.color }}
      >
        {this.props.color}
      </button>
    );
  }
}
export default CustomButton;
