import React from "react";

const Search = ({ setFilter, setReset }) => {
  return (
    <div>
      find countries
      <input
        type="text"
        onChange={({ target }) => {
          setFilter(target.value);
          setReset(false);
          console.log(target.value);
        }}
      />
    </div>
  );
};

export default Search;
