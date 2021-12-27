import React, { useState, useEffect } from "react";
import axios from "axios";
// const PROXY = "https://intense-mesa-62220.herokuapp.com/";
// const MOVIE_LINK = "https://hn.algolia.com/api/v1/search?query=";
const App = () => {
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState("");
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    const { data } = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${input}`
    );
    const joke =
      data.result[Math.floor(Math.random() * data.result.length)].value;
    setJoke(joke);
  };

  useEffect(() => {
    (async () => {
      const categories = await axios.get(
        "https://api.chucknorris.io/jokes/categories"
      );
      setCategories(categories.data);
    })();
  }, []);

  const handleFetchEvent = async (e) => {
    const joke = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${e.currentTarget.name}`
    );
    setJoke(joke.data.value);
  };

  const renderButtons = () => {
    return categories.map((category) => (
      <button
        key={category}
        className="btn"
        onClick={handleFetchEvent}
        name={category}
      >
        {category}
      </button>
    ));
  };
  return (
    <div>
      <label>Search for random Chuck Joke: </label>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
      <div className="joke-display">{joke}</div>
      <div className="btns-container">{categories && renderButtons()}</div>
    </div>
  );
};

export default App;
