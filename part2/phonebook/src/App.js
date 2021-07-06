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
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    personService.getAll().then(response => {
      setPersons(response.data);
      setRefresh(false);
    });
  }, [refresh]);

  const addName = e => {
    e.preventDefault();
    const newPerson = { name: newName, number: newNum };

    if (!persons.find(p => p.name === newPerson.name)) {
      personService.create(newPerson).then(r => {
        setPersons(persons.concat(newPerson));
        setRefresh(true);
      });
    } else {
      for (const p of persons) {
        if (newName === "" || newNum === "") {
          window.alert("missing name and or number");
        } else if (p.name === newPerson.name) {
          if (p.number === newPerson.number) {
            window.alert(
              `${newPerson.name} and ${newPerson.number} is already added to the phonebook`
            );
          } else {
            if (
              window.confirm(
                `${newPerson.name} is already added to the phonebook, replace the old number with a new one?`
              )
            ) {
              personService.update(p.id, newPerson);
              setRefresh(true);
            }
          }
        }
      }
    }
    setNewName("");
    setNewNum("");
  };

  const deletePerson = e => {
    if (window.confirm(`Delete ${persons[e.currentTarget.id].name}`)) {
      personService.remove(persons[e.currentTarget.id].id);
      setRefresh(true);
    }
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
      <Persons persons={namesToShow} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
