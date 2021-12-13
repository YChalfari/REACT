import React from "react";
import "./App.css";
import Button from "./modules/Button.js";
import Label from "./modules/Label";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curr: 0,
      color: "white",
    };
  }

  setColor = () => {
    if (this.state.curr < 0) {
      this.setState({ color: "red" });
    } else if (this.state.curr > 0) {
      this.setState({ color: "green" });
    } else {
      this.setState({ color: "black" });
    }
  };

  decrement = () => {
    if (this.state.curr > -10) {
      this.setColor();
      const newCurr = this.state.curr - 1;
      this.setState({ curr: newCurr });
    }
  };
  increment = () => {
    if (this.state.curr < 10) {
      const newCurr = this.state.curr + 1;
      this.setState({ curr: newCurr });
    }
    this.setColor();
  };
  render() {
    return (
      <div className="App">
        <Button function={this.decrement} class="btn" text="decrement" />
        <Label color={this.state.color} value={this.state.curr} />
        <Button function={this.increment} class="btn" text="increment" />
      </div>
    );
  }
}

export default App;
