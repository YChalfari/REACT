import React, { Component } from "react";
import TimeAgo from "javascript-time-ago";
import { v4 } from "uuid";
import ToDo from "./ToDo";
import en from "javascript-time-ago/locale/en.json";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");
export class ToDoList extends Component {
  state = {
    edit: {},
    userInput: "",
    currToDo: "",
    todos: [],
  };
  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };
  handleSubmit = (e) => {
    const currVal = this.state.userInput;
    const todos = this.state.todos;
    const id = v4();
    const newToDo = { id: v4(), value: currVal };
    if (e.keyCode === 13) {
      todos.push(newToDo);
      this.setState({ currToDo: currVal, todos: todos, userInput: "" }, () =>
        console.log(this.state)
      );
    }
  };
  handleEdit = (value, obj) => {
    const todos = this.state.todos;
    const item = todos.find((todo) => todo.id === obj.id);
    const index = todos.findIndex((todo) => todo.id === obj.id);
    const updatedTodo = { ...item, value: value };
    this.setState({
      todos: todos.map((todo) => (todo.id === item.id ? updatedTodo : todo)),
    });
  };
  handleDelete = (item) => {
    const todos = this.state.todos;
    const filteredArr = todos.filter((todo) => todo.id !== item.id);
    this.setState({ todos: filteredArr });
  };
  handleImportance = (value, obj) => {
    const todos = this.state.todos;
    const item = todos.find((todo) => todo.id === obj.id);
    const index = todos.findIndex((todo) => todo.id === obj.id);
    const updatedTodo = { ...item, color: value };
    console.log(updatedTodo);
    this.setState({
      todos: todos.map((todo) => (todo.id === item.id ? updatedTodo : todo)),
    });
  };
  renderToDos = () => {
    return this.state.todos.map((todo) => (
      <ToDo
        time={timeAgo.format(Date.now() - 30 * 1000, "round")}
        key={todo.key}
        color={todo.color}
        todo={todo}
        value={todo.value}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
        handleImportance={this.handleImportance}
      />
    ));
  };
  render() {
    return (
      <div>
        <input
          onKeyUp={this.handleSubmit}
          onChange={this.handleChange}
          value={this.state.userInput}
          type="text"
        />
        {this.renderToDos()}
      </div>
    );
  }
}

export default ToDoList;
