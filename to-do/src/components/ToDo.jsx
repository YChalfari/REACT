import React, { Component } from "react";

export class ToDo extends Component {
  state = { todo: this.props.todo };
  handleDelete = (e) => {
    this.props.handleDelete(this.props.todo);
  };
  handleEdit = (e) => {
    const value = e.currentTarget.textContent;
    this.props.handleEdit(value, this.props.todo);
  };
  handleImportance = (e) => {
    this.props.handleImportance(e.target.value, this.props.todo);
  };
  render() {
    return (
      <div className="todo-item">
        <h3
          className={this.props.color}
          contentEditable="true"
          onInput={this.handleEdit}
        >
          {this.props.todo.value}
        </h3>
        <span className="edit-span">edit</span>
        <span>{this.props.time}</span>
        {/* <button onClick={this.handleEdit}>Edit</button> */}

        <select onChange={this.handleImportance} name="" value="" id="">
          <option value="" disabled="true">
            Priority
          </option>
          <option value="skyblue">Low</option>
          <option value="lightpink">Med</option>
          <option value="red">High</option>
        </select>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default ToDo;
