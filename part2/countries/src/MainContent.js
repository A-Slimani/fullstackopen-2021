import React, { useState } from "react";
import ShowCountry from "./mainContent/ShowCountry";
import CountryList from "./mainContent/CountryList";

const MainContent = ({ list, filterValue, setReset, reset }) => {
  const [index, setIndex] = useState("");

  const getCountry = e => {
    console.log(e.currentTarget.id); // gets the index of the button
    setIndex(parseInt(e.currentTarget.id));
    setReset(true);
  };

  const Main = () => {
    if (list.length === 1) {
      return <ShowCountry country={list[0]} />;
    } else if (reset) {
      return <ShowCountry country={list[index]} />;
    } else if (list.length > 5) {
      return filterValue.length === 0 ? (
        <p></p>
      ) : (
        <p>Too many matches, specify another filter</p>
      );
    } else {
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
