import React from "react";

const Filter = ({ filterNames, checkName, handleFilterChange }) => {
  return (
    <form onSubmit={filterNames}>
      <div>
        filter shown with
        <input value={checkName} onChange={handleFilterChange}></input>
      </div>
    </form>
  );
};

export default Filter;
