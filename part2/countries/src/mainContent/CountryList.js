import React from "react";

const CountryList = ({ list, getCountry }) => {
  return (
    <ul>
      {list.map((c, i) => (
        <li>
          {c.name}
          <button id={i} onClick={getCountry}>
            show
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
