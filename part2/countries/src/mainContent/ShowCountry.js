import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowCountry = ({ country }) => {
  const city = country.capital;
  const [weather, setWeather] = useState([]);

  const getWeather = () => {
    const call = "http://api.weatherstack.com/current?access_key=".concat(
      process.env.REACT_APP_API_KEY,
      "&query=",
      city
    );
    axios.get(call).then(response => {
      setWeather(response.data);
    });
  };

  useEffect(getWeather, []);
  console.log(weather);

  return (
    <div>
      <h1>{country.name}</h1>
      <p>
        <b>Capital:</b> {country.capital}
      </p>
      <p>
        <b>Population:</b> {country.population}
      </p>
      <h2>languages</h2>
      <ul>
        {country.languages.map((l, i) => (
          <li key={i}>{l.name}</li>
        ))}
      </ul>
      <img
        src={country.flag}
        alt="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/black-flag.png"
        width="300"
        height="300"
      />
      <h2>Weather in {country.capital}</h2>
      <p>
        <b>temperature:</b> {weather.current.temperature} Celcius
      </p>
      <img />
      <p>
        <b>wind: </b>
      </p>
    </div>
  );
};

export default ShowCountry;
