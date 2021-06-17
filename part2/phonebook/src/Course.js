import React from "react";
import Header from "./Header";
import Content from "./Content";
import Sum from "./Sum";

const Course = ({ courses }) => {
  // console.log("@ course: ", course.parts)
  // console.log("@ course name: ", course.name)
  return (
    <div>
      {courses.map((course) => (
        <div>
          <Header header={course.name} />
          <Content parts={course.parts} />
          <Sum course={course} />
        </div>
      ))}
    </div>
  );
};

export default Course;

/*
<Header header={course.name} />
<Content parts={course.parts} />
<Sum course={course} />
*/
