import React from "react";
import ReactDOM from "react-dom";

const Header = ({ courseinfo }) => {
  return <h1>{courseinfo.course}</h1>;
};

const Part = ({ name, exercise }) => {
  return (
    <p>
      {name} {exercise}
    </p>
  );
};

const Content = ({ courseinfo }) => {
  return (
    <div>
      <Part
        name={courseinfo.parts[0].name}
        exercise={courseinfo.parts[0].exercises}
      />
      <Part
        name={courseinfo.parts[1].name}
        exercise={courseinfo.parts[1].exercises}
      />
      <Part
        name={courseinfo.parts[2].name}
        exercise={courseinfo.parts[2].exercises}
      />
    </div>
  );
};

const Total = ({ courseinfo }) => {
  return (
    <p>
      Number of exercises
      {courseinfo.parts.reduce((a, b) => (a += b.exercises), 0)}
    </p>
  );
};

const App = () => {
  const courseinfo = {
    course: "Half stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header courseinfo={courseinfo} />
      <Content courseinfo={courseinfo} />
      <Total courseinfo={courseinfo} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
