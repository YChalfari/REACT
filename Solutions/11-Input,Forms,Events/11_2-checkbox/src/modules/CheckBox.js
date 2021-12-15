import React from "react";

class CheckBox extends React.Component {
  state = { color: this.props.color };
  handleButtonClick = (e) => this.props.onClick(this.state.color);

  render() {
    return (
      <div className="checkbox-wrap">
        <label htmlFor={this.props.name}>
          <input
            type="checkbox"
            name={this.props.name}
            defaultChecked={this.props.isChecked}
          />
          {this.props.text}
        </label>
      </div>
    );
  }
}
export default CheckBox;
