import React, { useState, useEffect } from "react";
import axios from "axios";
const PROXY = "https://intense-mesa-62220.herokuapp.com/";
const MOVIE_LINK = "https://restcountries.com/v2/all";
const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [term, setTerm] = useState("");
  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  useEffect(() => {
    const filtered = countries.filter((country) => country.name.includes(term));
    setFilteredCountries(filtered);
  }, [term]);

  useEffect(() => {
    (async () => {
      const data = await axios.get(`${PROXY}${MOVIE_LINK}`);
      console.log(data.data);
      setCountries(data.data);
    })();
  }, []);
  const renderCountries = () => {
    if (filteredCountries.length > 0) {
      return filteredCountries.map((country, i) => {
        return <li key={country.name}>{country.name}</li>;
      });
    }
  };
  return (
    <div>
      <label>Search for a country: </label>
      <input type="text" value={term} onChange={handleChange} />
      <ul>{renderCountries()}</ul>
    </div>
  );
};

export default App;
