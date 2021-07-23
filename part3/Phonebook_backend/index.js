// if(process.env.NODE_ENV !== "production"){
//   require("dotenv").config()
// }

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
// const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");
const app = express();
const Person = require("./models/person");

var token = morgan.token("postreq", function (req, res) {
  const body = JSON.stringify(req.body);
  return JSON.stringify(req.body);
});

app.use(express.static("build"));
app.use(express.json());
app.use(morgan(":method :url :status - :total-time[3] ms :postreq"));
app.use(cors());

// get ALL PERSONS
app.get("/api/persons", (request, response) => {
  Person.find({})
    .then(person => {
      response.json(person);
    })
    .catch(error => next(error));
});

// get info on a SELECTED PERSONS
app.get("/api/persons/:id", (request, response) => {
  Person.findById(request.params.id)
    .then(person => {
      person ? response.json(person) : response.status(404).end();
    })
    .catch(error => next(error));
});

// INFO about SERVER
app.get("/info", (request, response) => {
  response.end(
    `<p>Phonebook has info for ${persons.length} people</p> <p>${new Date()}</p>`
  );
});

// CREATE and POST a single phonebook ENTRY
app.post("/api/persons", (request, response, next) => {
  const body = request.body;

  if (body === undefined) {
    return response.status(400).json({ error: "content missing" });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person
    .save()
    .then(savedPerson => {
      return savedPerson.toJSON();
    })
    .then(savedAndFormattedNote => {
      response.json(savedAndFormattedNote);
    })
    .catch(error => next(error));
});

// DELETE a single phonebook ENTRY
app.delete("/api/persons/:id", (request, response) => {
  Person.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch(error => next(error));
});

app.put("/api/persons/:id", (request, response, next) => {
  const body = request.body;

  const person = {
    name: body.name,
    number: body.number,
  };

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson);
    })
    .catch(error => next(error));
});

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError" && error.kind === "ObjectId") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
