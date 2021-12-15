import React from "react";
import "./App.css";
import Box from "./modules/Box";
class App extends React.Component {
  state = { isBoxShown: false };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isBoxShown: true });
    }, 1000);
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ isBoxShown: false });
    }, 3000);
  }
  render() {
    return (
      <div className="App">
        {this.state.isBoxShown && <Box size="200px" />}
        {this.state.isBoxShown && <Box size="300px" />}
        {this.state.isBoxShown && <Box size="100px" />}
      </div>
    );
  }
}

export default App;
