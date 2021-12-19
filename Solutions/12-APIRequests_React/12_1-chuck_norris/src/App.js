import React from "react";
import axios from "axios";
import Input from "./modules/Input";
import "./App.css";

class App extends React.Component {
  state = {};
  async componentDidMount() {
    const categories = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    this.setState({ categories: categories.data });
  }
  handleFetchEvent = async (e) => {
    const joke = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${e.currentTarget.name}`
    );
    this.setState({ joke: joke.data.value });
  };
  handleInput = async (value) => {
    const { data } = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${value}`
    );
    const joke = data.result[Math.floor(Math.random() * 11)].value;
    this.setState({ joke: joke }, console.log(joke));
  };
  renderButtons = () => {
    return this.state.categories.map((category) => (
      <button className="btn" onClick={this.handleFetchEvent} name={category}>
        {category}
      </button>
    ));
  };
  render() {
    return (
      <div className="content">
        <Input onChange={this.handleInput} />
        <div className="joke-display">{this.state.joke}</div>
        <div className="btns-container">
          {this.state.categories && this.renderButtons()}
        </div>
      </div>
    );
  }
}

export default App;
