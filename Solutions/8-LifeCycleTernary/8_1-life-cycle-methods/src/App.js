import React from "react";
import "./App.css";

class App extends React.Component {
  state = { favoriteColor: "red" };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "blue" });
    }, 1000);
  }
  componentDidUpdate() {
    const updatedDiv = document.querySelector("#id");
    updatedDiv.textContent = this.state.favoriteColor;
  }
  render() {
    return (
      <div className="App">
        <h1>{`My fav color is ${this.state.favoriteColor}`}</h1>
        <div id="id"></div>
      </div>
    );
  }
}

export default App;
