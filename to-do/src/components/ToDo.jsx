import React, { Component } from "react";

export class ToDo extends Component {
  state = { todo: "" };
  render() {
    console.log(this.props.todo);
    return (
      <div>
        {this.props.todo}
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default ToDo;
