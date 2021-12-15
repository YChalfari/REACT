import React from "react";
import Input from "./Input";
class Form extends React.Component {
  state = { color: this.props.color };

  handleButtonClick = (e) => this.props.onClick(this.state.color);

  render() {
    return (
      <form>
        <h2>React Survey</h2>
        <Input name="Name" />
        <Input name="Age" />
      </form>
    );
  }
}
export default Form;
