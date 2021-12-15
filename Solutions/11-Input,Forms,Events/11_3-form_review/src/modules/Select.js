import React from "react";

class Select extends React.Component {
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
        <label htmlFor={this.props.name}>How much do you like React?</label>
        <select
          onChange={this.handleInputChange}
          value={this.state.value}
          type={this.props.type}
          name={this.props.name}
          id={this.props.name}
        >
          <option value="" selected disabled hidden>
            fun or ...
          </option>
          <option value="I'm dying">Death itself</option>
          <option value="Hate it">Hate it</option>
          <option value="Could be worse">Could be worse</option>
          <option value="Love it">Love it</option>
        </select>
        {/*  */}
      </div>
    );
  }
}

export default Select;
