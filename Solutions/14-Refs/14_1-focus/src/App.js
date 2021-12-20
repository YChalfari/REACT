import React from "react";
import "./App.css";

class App extends React.Component {
  state = {};
  inputRef = React.createRef();
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div className="App">
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default App;
