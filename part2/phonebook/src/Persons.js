import React from "react";

const Persons = ({ persons, deletePerson }) => {
  return (
    <ul>
      {persons.map((p, i) => (
        <li>
          {p.name} {p.number}
          <button id={i} onClick={deletePerson}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
