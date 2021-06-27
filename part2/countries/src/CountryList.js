import React from "react";

const CountryList = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((c) => (
          <li>{c.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
