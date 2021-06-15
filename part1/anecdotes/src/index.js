import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Anecdote = ({ list, anecdote }) => {
  return <p>{list[anecdote]}</p>;
};

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
  const [points, setPoints] = useState(
    new Array(anecdotes.length + 1).join("0").split("").map(parseFloat)
  );
  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState(0);

  console.log(points);
  // console.log("points: ", points[selected]);
  // console.log(Math.max(...points));
  // console.log(anecdotes.findIndex(() => Math.max(...points)))
  // console.log(points.indexOf(Math.max(...points)));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote list={anecdotes} anecdote={selected} />
      <p>has {points[selected]} votes</p>
      <Button
        text="next anecdote"
        handleClick={() => {
          setSelected(Math.floor(Math.random() * anecdotes.length));
          setMostVoted(points.indexOf(Math.max(...points)));
        }}
      />
      <Button
        text="vote"
        handleClick={() => {
          const copy = [...points];
          copy[selected] += 1;
          setPoints(copy);
          setMostVoted(points.indexOf(Math.max(...points)));
        }}
      />
      <h1>Anecdotes with most votes</h1>
      <Anecdote list={anecdotes} anecdote={mostVoted} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
