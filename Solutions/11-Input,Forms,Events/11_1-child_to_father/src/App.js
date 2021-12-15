import React from "react";
import "./App.css";
import CustomButton from "./modules/CustomButton";

class App extends React.Component {
  state = { selectedColor: "" };

  handleButtonClick = (color) => this.setState({ selectedColor: color });

  renderButtons() {
    const colors = ["red", "blue", "yellow"];
    return colors.map((color) => (
      <CustomButton onClick={this.handleButtonClick} color={color} />
    ));
  }
  render() {
    return (
      <div className="App">
        {this.renderButtons()}
        <h1>{`The selected color is: ${this.state.selectedColor}`}</h1>
      </div>
    );
  }
}

export default App;
