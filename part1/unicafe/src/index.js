import React, { useState } from "react";
import ReactDOM from "react-dom";

// new comment

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Buttons = () => {
    return (
      <div>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
      </div>
    )
  };

  const Stats  = () => {

    const total = good + neutral + bad
    
    return (
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {(good - bad) / total}</p>
        <p>positive {(good / total) * 100} %</p>
      </div>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Buttons />
      <h1>Statistics</h1>
      <Stats />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
