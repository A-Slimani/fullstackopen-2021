import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Abdullah Slimani" }]);
  const [newName, setNewName] = useState("add new name here...");

  const addName = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const nameObj = { name: newName };
    setPersons(persons.concat(nameObj));
    setNewName("");
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
