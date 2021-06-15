import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  // can improve this by using a function getting the length of andecdotes
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0]);

  const Button = ({ text, handleClick }) => {
    return (
      <div>
        <button onClick={handleClick}>{text}</button>
      </div>
    );
  };

  const [selected, setSelected] = useState(0);

  console.log("points: ", points[selected]);

  return (
    <div>
      {anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <Button
        text="next anecdote"
        handleClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
      />
      <Button
        text="vote"
        handleClick={() => {
          
        }} 
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
