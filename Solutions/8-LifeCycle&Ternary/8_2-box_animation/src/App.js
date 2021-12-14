import React from "react";
import "./App.css";
import Button from "./modules/Button.js";
import Label from "./modules/Label";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curr: 0,
    };
  }
  increment = () => {
    const newCurr = this.state.curr + 1;
    this.setState({ curr: newCurr });
  };
  render() {
    return (
      <div className="App">
        <Button increment={this.increment} class="btn" text="increment" />
        <Label value={this.state.curr} />
      </div>
    );
  }
}

export default App;
