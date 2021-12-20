import React from "react";
import "./App.css";

class App extends React.Component {
  state = {};
  inputRef = React.createRef();
  componentDidMount() {
    this.inputRef.current.focus();
  }
  copyOnClick = () => {
    this.inputRef.current.select();
    document.execCommand("copy");
  };
  render() {
    return (
      <div className="App">
        <textarea ref={this.inputRef} />
        <button onClick={this.copyOnClick} className="btn">
          Copy Text
        </button>
      </div>
    );
  }
}

export default App;
