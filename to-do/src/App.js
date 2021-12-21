import React, { Component } from "react";
import ToDoList from "./components/ToDoList";
import ToDo from "./components/ToDo";
import "./App.css";

class App extends Component {
  state = {
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
    if (e.keyCode === 13) {
      todos.push(currVal);
      this.setState({ currToDo: currVal, todos: todos, userInput: "" }, () =>
        console.log(this.state)
      );
    }
  };
  render() {
    return (
      <div className="App">
        <input
          onKeyUp={this.handleSubmit}
          onChange={this.handleChange}
          value={this.state.userInput}
          type="text"
        />
        <ToDoList todos={this.state.todos} />
      </div>
    );
  }
}
export default App;
