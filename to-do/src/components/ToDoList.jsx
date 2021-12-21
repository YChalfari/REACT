import React, { Component } from "react";
import ToDo from "./ToDo";
export class ToDoList extends Component {
  state = { todos: this.props.todos };

  renderToDos = () => {
    console.log("render?");
    this.props.todos.map((todo) => <ToDo todo={todo} />);
  };
  render() {
    console.log(this.props.todos, this.state.todos);
    return <div>{this.renderToDos()}</div>;
  }
}

export default ToDoList;
