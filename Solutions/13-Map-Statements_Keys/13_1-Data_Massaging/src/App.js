import React from "react";
import data from "./modules/data";
import { getNames, preNineties } from "./modules/helpers";
import "./App.css";
import Name from "./modules/Name";
import Card from "./modules/Card";

class App extends React.Component {
  state = { names: [], seniors: [] };
  componentDidMount() {
    const names = getNames(data);
    const seniors = preNineties(data);
    this.setState({ names: names, seniors: seniors }, () =>
      console.log(this.state)
    );
  }
  render() {
    return (
      <div className="App">
        <Name names={this.state.names} />
        <Card seniors={this.state.seniors} />
      </div>
    );
  }
}

export default App;
