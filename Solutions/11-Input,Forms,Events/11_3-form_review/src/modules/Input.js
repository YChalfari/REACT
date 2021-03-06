import React from "react";

class Input extends React.Component {
  state = {
    value: this.props.data || "",
    name: this.props.name,
  };

  handleInputChange = (e) => {
    const target = e.target;
    this.setState((state) => {
      return { value: target.value };
    });
    this.props.onChange(target.name, target.value);
  };

  render() {
    return (
      <div className="input-wrap">
        <label htmlFor={this.props.name}>{this.props.name}</label>
        <input
          onChange={this.handleInputChange}
          value={this.state.value}
          type={this.props.type}
          name={this.props.name}
          id={this.props.name}
        />
      </div>
    );
  }
}

export default Input;
