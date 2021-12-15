import React from "react";
import Input from "./Input";
import Select from "./Select";
class Form extends React.Component {
  state = {
    firstname: (this.props.data && this.props.data.firstname) || "",
    lastname: (this.props.data && this.props.data.lastname) || "",
    like: (this.props.data && this.props.data.like) || "",
  };
  handleOnChange = (name, value) => {
    this.setState((state) => {
      return { [name]: value };
    });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.props.page, this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <h2>React Survey</h2>
        <Input
          name="firstname"
          data={this.props.data && this.props.data.firstname}
          onChange={this.handleOnChange}
        />
        <Input
          name="lastname"
          data={this.props.data && this.props.data.lastname}
          onChange={this.handleOnChange}
        />
        <Select
          name="like"
          data={this.props.data && this.props.data.like}
          onChange={this.handleOnChange}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Form;
