import React, { useState, useEffect } from "react";
import axios from "axios";
const PROXY = "https://intense-mesa-62220.herokuapp.com/";
const MOVIE_LINK = "https://swapi.dev/api/films/1/";
const App = () => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await axios.get(`${PROXY}${MOVIE_LINK}`);
      setMovie([data.data]);
    })();
  }, []);
  const renderDetails = () => {
    if (movie) {
      return movie.map((detail) => {
        return (
          <h6
            key={detail.episode_id}
          >{`${detail.title}: ${detail.director}`}</h6>
        );
      });
    }
  };
  return <div>{renderDetails()}</div>;
};

export default App;
