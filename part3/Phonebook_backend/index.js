const { json } = require("express");
const express = require("express");
const morgan = require("morgan");
const app = express();

var token = morgan.token("postreq", function (req, res) {
  const body = JSON.stringify(req.body)
  return JSON.stringify(req.body)
});

app.use(express.json());
// app.use(morgan('tiny'))
app.use(morgan(":method :url :status - :total-time[3] ms :postreq"));

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

const generateId = () => {
  let id = Math.ceil(Math.random() * 1000);
  while (persons.find(p => p.id === id)) {
    id = Math.ceil(Math.random() * 1000);
  }
  return id;
};

// get ALL PERSONS
app.get("/api/persons", (request, response) => {
  response.json(persons);
});

// get info on a SELECTED PERSONS
app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find(p => p.id === id);

  if (person) {
    response.json(person);
  } else response.status(404).end("<p>Person not found</p>");
});

// INFO about SERVER
app.get("/info", (request, response) => {
  response.end(
    `<p>Phonebook has info for ${persons.length} people</p> <p>${new Date()}</p>`
  );
});

// CREATE and POST a single phonebook ENTRY
app.post("/api/persons", (request, response) => {
  const body = request.body;

  const errorMessage = message =>
    response.status(400).json({
      error: message,
    });

  if (!body.name || !body.number) {
    return errorMessage("missing name and or number");
  } else if (persons.find(p => p.name === body.name)) {
    return errorMessage("name must be unique");
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  };

  persons = persons.concat(person);

  response.json(person);
});

// DELETE a single phonebook ENTRY
app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter(p => p.id !== id);
  response.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
