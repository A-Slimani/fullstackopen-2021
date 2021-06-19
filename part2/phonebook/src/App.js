import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  //  const [sameName, setSameName] = useState(false);

  const addName = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const nameObj = { name: newName };
    
    if(!persons.find(person => person.name === nameObj.name)){
      setPersons(persons.concat(nameObj))
    } else (
      window.alert(`${nameObj.name} is already added to the phonebook`)
    )

    setNewName("");
  };

  const handleNameChange = (event) => {
    console.log("EVENT TARGET VALUE: ", event.target.value);
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
