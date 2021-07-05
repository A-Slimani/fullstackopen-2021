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
  const [filter, setFilter] = useState("");
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");

  const addName = e => {
    e.preventDefault();
    const currentObj = { name: newName, number: newNum };

    if (newName === "" || newNum === "") {
      window.alert("missing name and or number");
    } else if (!persons.find(p => p.name === currentObj.name)) {
      setPersons(persons.concat(currentObj));
    } else window.alert(`${currentObj.name} is already added to the phonebook`);

    setNewName("");
    setNewNum("");
  };

  const namesToShow =
    filter === ""
      ? persons
      : persons.filter(p => p.name.toLowerCase().match(filter.toLowerCase()));

  const handleNameChange = e => {
    e.preventDefault();
    setNewName(e.target.value);
  };

  const handleNumChange = e => {
    e.preventDefault();
    setNewNum(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter} />
      <h2>Add a new</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNum={newNum}
        handleNumChange={handleNumChange}
      />
      <h2>Numbers</h2>
      <Persons persons={namesToShow} />
    </div>
  );
};

export default App;
