import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  // console.log("@ content: ", parts)
  return (
    <div>
      {parts.map(part => <Part name={part.name} exercise={part.exercises} key={part.id} />)}
    </div>
  )  
};

export default Content;
