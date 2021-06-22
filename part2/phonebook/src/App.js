import React, { useState } from "react";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Filter from "./Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [filteredPersons, setFilteredPersons] = useState(persons);

  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [checkName, setCheckName] = useState("");

  const addName = (e) => {
    e.preventDefault();
    const currentObj = { name: newName, number: newNum };

    if (!persons.find((p) => p.name === currentObj.name)) {
      setPersons(persons.concat(currentObj));
      setFilteredPersons(persons);
    } else window.alert(`${currentObj.name} is already added to the phonebook`);

    setNewName("");
    setNewNum("");
  };

  const filterNames = (e) => {
    e.preventDefault();
    setFilteredPersons(persons.filter((p) => p.name.match(checkName)));
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    setNewName(e.target.value);
  };

  const handleNumChange = (e) => {
    e.preventDefault();
    setNewNum(e.target.value);
  };

  const handleFilterChange = (e) => {
    e.preventDefault();
    setCheckName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterNames={filterNames}
        checkName={checkName}
        handleFilterChange={handleFilterChange}
      />
      <h2>Add a new</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNum={newNum}
        handleNumChange={handleNumChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
