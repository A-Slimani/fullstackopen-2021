import React, { useState } from "react";

const Filter = ({ persons }) => {
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [checkName, setCheckName] = useState("");

  const filterNames = (e) => {
    e.preventDefault();
    setFilteredPersons(
      persons.filter((person) => person.name.match(checkName))
    );
  };

  const handleFilterChange = (e) => {
    setCheckName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={filterNames}>
        <div>
          Filter shown with: <input onChange={handleFilterChange} />
        </div>
      </form>
    </div>
  );
};

export default Filter;
