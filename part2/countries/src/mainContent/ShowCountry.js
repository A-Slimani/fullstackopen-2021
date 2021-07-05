import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowCountry = ({ country }) => {
  const city = country.capital;
  const [cities, setCities] = useState([]);
  const [cityCode, setCityCode] = useState("");
  const [weatherInfo, setWeatherInfo] = useState("");
  const [check, setCheck] = useState(false);

  const getCityCodes = () => {
    const call =
      "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=".concat(
        process.env.REACT_APP_API_KEY,
        "&q=",
        city
      );
    axios.get(call).then(response => setCities(response.data));
  };

  const getWeatherInfo = () => {
    if (cityCode !== "") {
      const call =
        "http://dataservice.accuweather.com/currentconditions/v1/daily/1day/".concat(
          cityCode,
          "?apikey=",
          process.env.REACT_APP_API_KEY,
          "&metric=true"
        );
      axios.get(call).then(response => setWeatherInfo(response.data));
    }
  };

  const findCityCode = () => {
    for (const c of cities) {
      if (c.Country.LocalizedName.match(country.name)) setCityCode(c.Key);
    }
  };

  useEffect(findCityCode, [country.name, cities]);
  useEffect(getCityCodes, [city]);
  useEffect(getWeatherInfo, [cityCode]);

  const weatherCheck = () => {
    return weatherInfo.DailyForecasts !== undefined
      ? weatherInfo.DailyForecasts[0].Day.Icon
      : "failed";
  };

  const showTemp = () => {
    return weatherInfo.DailyForecasts !== undefined
      ? weatherInfo.DailyForecasts[0].Temperature.Maximum.Value
      : "";
  };

  // const showWind = () => {};

  console.log("Daily Forecasts: ", weatherInfo.DailyForecasts);

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
        <b>temperature:</b> {showTemp()} Celcius
      </p>
      <img alt="" />
      {weatherCheck()}
      <p>
        <b>wind: </b>
      </p>
    </div>
  );
};

export default ShowCountry;
