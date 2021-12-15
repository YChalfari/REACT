import React from "react";
import "./App.css";
import Chameleon from "./modules/Chameleon";
class App extends React.Component {
  state = { counter: 0 };

  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
      console.log(this.state.counter);
    }, 500);
  }

  render() {
    return (
      <div className="App">
        <Chameleon count={this.state.counter} />
      </div>
    );
  }
}

export default App;
