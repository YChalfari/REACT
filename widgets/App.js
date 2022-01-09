import React, { useState, useEffect } from "react";
import axios from "axios";
const PROXY = "https://intense-mesa-62220.herokuapp.com/";
const MOVIE_LINK = "https://hn.algolia.com/api/v1/search?query=";
const App = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("hooks");
  const [input, setInput] = useState("hooks");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = () => {
    setQuery(input);
  };
  useEffect(() => {
    (async () => {
      const data = await axios.get(`${PROXY}${MOVIE_LINK}${query}`);
      setResults(data.data.hits);
    })();
  }, [query]);
 

  useEffect(() => {
    (async () => {
      const data = await axios.get(`${PROXY}${MOVIE_LINK}${query}`);
      setResults(data.data.hits);
    })();
  }, []);
  const renderResults = () => {
    if (results.length > 0) {
      return results.map((result, i) => {
        return (
          <li key={result.objectID}>
            <a href={result.url} target="_blank">
              {result.title}
            </a>
          </li>
        );
      });
    }
  };
  return (
    <div>
      <label>Search AngoliaAPI: </label>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
      <ul>{renderResults()}</ul>
    </div>
  );
};

export default App;
