import ReactDOM from "react-dom";
import App from "./App.js";
import axios from "axios";
import './index.css'

// const promise = axios.get("/api/persons").then((response) => {
//   const notes = response.data;
//   console.log(notes);
// });
// console.log(promise);


ReactDOM.render(<App />, document.getElementById("root"));

// http://localhost:3001/persons