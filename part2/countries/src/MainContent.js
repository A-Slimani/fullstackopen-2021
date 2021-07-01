import React, { useState, useEffect } from "react";
import ShowCountry from "./mainContent/ShowCountry";
import CountryList from "./mainContent/CountryList";
import axios from "axios";

const MainContent = ({ list, filterValue, setReset, reset }) => {
  const [index, setIndex] = useState("");
  // const [weather, setWeather] = useState([]);
  // const [city, setCity] = useState("");
  // const initalCall = "http://api.weatherstack.com/current?access_key=".concat(
  //   process.env.REACT_APP_API_KEY,
  //   "&query="
  // );
  // const [call, setCall] = useState(initalCall);

  // const getWeather = () => {
  //   setCall(call.concat(city));
  //   axios.get(call).then(response => {
  //     setWeather(response.data);
  //   });
  // };

  const getCountry = e => {
    console.log(e.currentTarget.id); // gets the index of the button
    setIndex(parseInt(e.currentTarget.id));
    setReset(true);
  };

  const Main = () => {
    if (list.length === 1) {
      // setCity(list[0].capital);
      return <ShowCountry country={list[0]} />;
    } else if (reset) {
      // setCity(list[index].capital);
      return <ShowCountry country={list[index]} />;
    } else if (list.length > 5) {
      // setCall(initalCall);
      return filterValue.length === 0 ? (
        <p></p>
      ) : (
        <p>Too many matches, specify another filter</p>
      );
    } else {
      // setCall(initalCall);
      return <CountryList list={list} getCountry={getCountry} />;
    }
  };

  return (
    <div>
      <Main />
    </div>
  );
};

export default MainContent;
