import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Total = (props) => {
  return (
    <p>The number of exercises {props.e1 + props.e2 + props.e3}</p>
  )
}

const App = () => {
  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} />
      <Total  e1={exercises1} e2={exercises2} e3={exercises3} />
    </div>
  )
}

export default App

/*
WHAT IT SHOULD LOOK LIKE

<h1> Half Stack Application Development </h1>
<p> Fundamentals of React 10 </p>
<p> Using props to pass data 7 </p>
<p> State of a component 14 </p>
<p> Number of exercises 31 </p>
*/