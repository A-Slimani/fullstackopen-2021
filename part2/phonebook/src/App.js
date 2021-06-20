import React, { useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [checkName, setCheckName] = useState("");

  const handleFilterChange = (e) => {
    return e.target.value;
  };

  const handleNameChange = (e) => {
    return e.target.value;
  };

  const handleNumberChange = (e) => {
    return e.target.value;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        persons={persons}
        filterChange={handleFilterChange}
        setFiltered={setFilteredPersons}
        checkName={checkName}
        setCheckName={setCheckName}
      />
      <h3>Add new</h3>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        numChange={handleNumberChange}
        nameChange={handleNameChange}
      />
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
