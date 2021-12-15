import React from "react";
import "./App.css";
import CheckBox from "./modules/CheckBox";

class App extends React.Component {
  state = { selectedColor: "" };

  handleCheckboxChange = (color) => this.setState({ selectedColor: color });

  render() {
    return (
      <div className="App">
        <CheckBox
          isChecked={false}
          name="read"
          text="I read the term of the app"
        />
        <CheckBox
          isChecked={false}
          name="accept"
          text="I accept the term of the app"
        />
        <CheckBox
          isChecked={true}
          name="weekly"
          text="I want to receive weekly news letter"
        />
        <CheckBox
          isChecked={true}
          name="offers"
          text="I want to receive sales and offers"
        />
      </div>
    );
  }
}

export default App;
