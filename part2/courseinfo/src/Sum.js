import React from "react";

const Sum = ({ course }) => {
  return (
    <p>
      <strong>
        total of {course.parts.reduce((a, b) => (a += b.exercises), 0)}{" "}
        exercises
      </strong>
    </p>
  );
};

export default Sum;
