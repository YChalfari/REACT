import React from "react";

class Input extends React.Component {
  state = {
    value: "",
    name: "",
  };
  handleInputChange = (e) => {
    const target = e.target;
    this.setState({ value: target.value, name: target.name });
    console.log(this.state);
  };
  render() {
    return (
      <div className="input-wrap">
        <label htmlFor={this.props.name}>{this.props.name}</label>
        <input
          onChange={this.handleInputChange}
          value={this.state.value}
          type="text"
          name={this.props.name}
          id={this.props.name}
        />
      </div>
    );
  }
}

export default Input;
