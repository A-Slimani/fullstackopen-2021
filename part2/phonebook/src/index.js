import ReactDOM from "react-dom";
import App from "./App.js";
import axios from "axios";

const promise = axios.get("http://localhost:3001/notes").then((response) => {
  const notes = response.data;
  console.log(notes);
});
console.log(promise);

const promise2 = axios.get("http://localhost:3001/foobar");
console.log(promise2);

ReactDOM.render(<App />, document.getElementById("root"));
