import React from "react";

const Part = ({ name, exercise, id}) => {
  return (
    <p key={id}>
      {name} {exercise}
    </p>
  );
};

export default Part;
