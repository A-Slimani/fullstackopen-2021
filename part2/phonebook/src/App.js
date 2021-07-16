import React, { useState, useEffect } from "react";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Filter from "./Filter";
import Notification from "./components/Notification";
import personService from "./services/Person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [message, setMessage] = useState(null);
  const [isError, setError] = useState(false);

  useEffect(() => {
    personService.getAll().then(persons => {
      setPersons(persons);
      setRefresh(false);
    });
  }, [refresh]);

  const addName = e => {
    e.preventDefault();
    const newPerson = { name: newName, number: newNum };

    if (!persons.find(p => p.name === newPerson.name)) {
      personService.create(newPerson).then(() => {
        setPersons(persons.concat(newPerson));
        setRefresh(true);
        setMessage(`Added ${newPerson.name}`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
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
              personService.update(p.id, newPerson).catch(() => {
                setMessage(
                  `Information of '${newPerson.name}' had already been removed from the server`
                );
                setError(true);
              });
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

  // console.log("names to show: ", namesToShow)

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} error={isError} />
      <br />
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
