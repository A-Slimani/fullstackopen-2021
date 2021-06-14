import React from "react";

const Header = (course) => {
  <h1>{course}</h1>;
};

const Other = () => {
  const course = "Half Stack Application Development";

  return (
    <div>
      <Header course={course} />
    </div>
  );
};

export default Other;
