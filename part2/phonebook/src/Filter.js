import React from "react";

const Filter = ({
  persons,
  filterChange,
  setFiltered,
  checkName,
  setCheckName,
}) => {
  const filterNames = (e) => {
    e.preventDefault();
    setFiltered(persons.filter((person) => person.name.match(checkName)));
    setCheckName("");
  };

  return (
    <div>
      <form onSubmit={filterNames}>
        <div>
          Filter shown with: <input onChange={filterChange} />
        </div>
      </form>
    </div>
  );
};

export default Filter;
