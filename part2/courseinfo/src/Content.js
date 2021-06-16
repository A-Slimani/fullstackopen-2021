import React from "react";
import Part from "./Part";

const Content = ({ course }) => {
  for (part in { course }) {
    return (
      <div>
        <Part name={part.name} exercise={part.exercise} />
      </div>
    );
  }
};

export default Content;
