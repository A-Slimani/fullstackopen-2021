import React, { useState } from "react";

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addNew = (e) => {
    e.preventDefault();
    const currentObj = { name: newName, number: newNumber };

    if (!persons.find((person) => person.name === currentObj.name)) {
      setPersons(persons.concat(currentObj));
    } else window.alert(`${currentObj.name} is already added to the phonebook`);

    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  return (
    <form onSubmit={addNew}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <br></br>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
