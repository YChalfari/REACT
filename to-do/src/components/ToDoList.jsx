import React, { Component } from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { v4 } from "uuid";
import ToDo from "./ToDo";

import "./ToDoList.css";
import logo from "../todologo.png";
import woman from "../womanwork.png";

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
    const todos = [...this.state.todos];
    const id = v4();
    const newToDo = { id: v4(), value: currVal };
    if (e.keyCode === 13) {
      todos.push(newToDo);
      this.setState({ currToDo: currVal, todos: todos, userInput: "" });
    }
  };
  handleEdit = (value, obj) => {
    const todos = [...this.state.todos];
    const item = todos.find((todo) => todo.id === obj.id);
    const updatedTodo = { ...item, value };
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
      <div className="main">
        <img className="woman" src={woman} alt="" />
        {/* <h1 className="main-title">To-Do</h1> */}
        <img className="logo" src={logo} alt="" />
        <input
          className="main-input"
          onKeyUp={this.handleSubmit}
          onChange={this.handleChange}
          value={this.state.userInput}
          type="text"
        />
        <div className="list-wrap">{this.renderToDos()}</div>
      </div>
    );
  }
}

export default ToDoList;
