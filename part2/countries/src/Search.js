import React from "react";

const Search = ({ setFilter }) => {
  return (
    <div>
      find countries
      <input
        type="text"
        onChange={({ target }) => {
          setFilter(target.value);
          console.log(target.value)
        }}
      />
    </div>
  );
};

export default Search;
