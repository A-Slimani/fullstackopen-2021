import React from "react";
import Note from "./components/Note"
// import ReactDOM from "react-dom";

const RenderingCollections = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default RenderingCollections;
