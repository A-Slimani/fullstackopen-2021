import React, { useState, useEffect } from "react";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Filter from "./Filter";
import personService from "./services/Person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");

  useEffect(() => {
    personService.getAll().then(response => {
      setPersons(response.data);
    });
  }, []);

  const addName = e => {
    e.preventDefault();
    const currentObj = { name: newName, number: newNum };

    if (newName === "" || newNum === "") {
      window.alert("missing name and or number");
    } else if (!persons.find(p => p.name === currentObj.name)) {
      personService.create(currentObj).then(response => {
        setPersons(persons.concat(currentObj));
      });
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
