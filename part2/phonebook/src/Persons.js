import React, { useState } from "react";

const Persons = ({ filteredPersons }) => {
  return (
    <ul>
      {filteredPersons.map((person) => (
        <li>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
};

export default Persons;
