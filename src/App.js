import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import CountryCardList from "./components/card-list/card-list.component";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3002/countries")
      .then((response) => setCountries(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCountries = countries.filter((country) => {
    const countryName = country.country.toLowerCase();
    const stateName = country.state.toLowerCase();
    const query = searchQuery.toLowerCase();
    return countryName.includes(query) || stateName.includes(query);
  });

  return (
    <div className="App">
      <div className="background"></div>
      <h1 className="app-title">Countries</h1>
      <SearchBox
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
      />
      <CountryCardList countries={filteredCountries} />
    </div>
  );
}

export default App;
