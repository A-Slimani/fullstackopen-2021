import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import MainContent from "./MainContent";

const App = () => {
  const [filterValue, setFilter] = useState("");
  const [list, setList] = useState([]);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [reset, setReset] = useState(false);

  const setCountries = () => {
    axios.get("http://restcountries.eu/rest/v2/all").then(response => {
      setList(response.data);
    });
  };

  const countriesToShow =
    filterValue === ""
      ? list
      : list.filter(c => c.name.toLowerCase().match(filterValue.toLowerCase()));

  useEffect(setCountries, []);

  return (
    <div>
      <Search setFilter={setFilter} setReset={setReset} />
      <MainContent
        list={countriesToShow}
        filterValue={filterValue}
        setReset={setReset}
        reset={reset}
      />
    </div>
  );
};

export default App;
