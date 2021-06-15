import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistic = ({ text, value, p }) => {
  return (
    <tr>
      <td> {text} </td>
      <td>
        {value} {p}
      </td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="total" value={total} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} p={"%"} />
      </tbody>
    </table>
  );
};

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
    );
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Buttons />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
