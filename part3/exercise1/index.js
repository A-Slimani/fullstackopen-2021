// express server

//  importing express, a function used to create an express application
// 	stored in the app variable
const express = require("express");
const app = express();
const cors = require("cors");
// const mongoose = require("mongoose");
const Note = require("./models/note");

require("dotenv").config();

app.use(express.static("build"));
app.use(cors());
app.use(express.json());

const requestLogger = (request, response, next) => {
  console.log("Method: ", request.method);
  console.log("Path: ", request.path);
  console.log("Body: ", request.body);
  console.log("---");
  next();
};

app.use(requestLogger);

// let notes = [
//   { id: 1, content: "HTML is easy", date: "2019-05-30T17:30:31.098Z", important: true },
//   {
//     id: 2,
//     content: "Browser can execute only Javascript",
//     date: "2019-05-30T18:39:34.091Z",
//     important: false,
//   },
//   {
//     id: 3,
//     content: "GET and POST are the most important methods of HTTP protocol",
//     date: "2019-05-30T19:20:14.298Z",
//     important: true,
//   },
// ];

// const url = `mongodb+srv://aboud:${process.env.DB_PASS}@cluster0.b0bjt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
// });

// const noteSchema = new mongoose.Schema({
//   content: String,
//   date: Date,
//   important: Boolean,
// });

// noteSchema.set("toJSON", {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString();
//     delete returnedObject._id;
//     delete returnedObject.__v;
//   },
// });

// const Note = mongoose.model("Note", noteSchema);

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/api/notes", (req, res) => {
  Note.find({}).then(notes => {
    res.json(notes);
  });
});

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0;
  return maxId + 1;
};

app.post("/api/notes", (request, response) => {
  const body = request.body;

  // if the recieved data is missing a value for the content property, the server
  // will respond to the request with the status code 400 bad request

  // if (!body.content) {
  //   return response.status(400).json({
  //     error: "content missing",
  //   });
  // }

  if (body.content === undefined) {
    return response.status(400).json({ error: "content missing" });
  }

  // const note = {
  //   id: generateId(),
  //   content: body.content,
  //   date: new Date(),
  //   important: body.important || false,
  // };

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  });

  // notes = notes.concat(note);

  note.save().then(savedNote => {
    response.json(savedNote);
  });

  response.json(note);
});

app.get("/api/notes/:id", (request, response) => {
 // const id = Number(request.params.id);
 // const note = notes.find(note => note.id === id);

 // if (note) {
 //   response.json(note);
 // } else response.status(404).end();

 Note.findById(request.params.id).then(note => {
   response.json(note)
 })
});

app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter(note => note.id !== id);

  response.status(204).end();
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
