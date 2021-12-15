import React from "react";

class CheckBox extends React.Component {
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
