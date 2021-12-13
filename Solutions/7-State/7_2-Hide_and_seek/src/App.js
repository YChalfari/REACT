import React from "react";
import "./App.css";
import Button from "./modules/Button.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxVisible: true,
    };
  }
  toggleBox = () => {
    if (this.state.boxVisible === true) {
      this.setState({ boxVisible: false });
    } else {
      this.setState({ boxVisible: true });
    }
  };
  render() {
    return (
      <div className="App">
        <Button peekaboo={this.toggleBox} class="btn" text="Hide and Seek" />
        <div className={`${this.state.boxVisible} box`}></div>
      </div>
    );
  }
}

export default App;
