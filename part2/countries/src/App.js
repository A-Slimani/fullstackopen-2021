import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import CountryList from "./CountryList";

const App = () => {
  const [filter, setFilter] = useState("");
  const [list, setList] = useState([]);

  const setCountries = () => {
    console.log("effect");
    axios.get("http://restcountries.eu/rest/v2/all").then((response) => {
      console.log("promise fulfilled");
      setList(response.data);
    });
  };

  useEffect(setCountries, []);

  const countriesToShow =
    filter === ""
      ? list
      : list.filter((c) => c.name.toLowerCase().match(filter.toLowerCase()));

  const toShow = () => {
    if(filter === ""){
      if(list > 5){
        setList()
      }
    }
  }

  return (
    <div>
      <Search setFilter={setFilter} />
      <CountryList list={countriesToShow} />
    </div>
  );
};

export default App;
