const personRouter = require('express').Router();
const { response } = require('express');
const Person = require('../models/person');

personRouter.get('/', (req, res) => {
  Person.find({})
    .then(person => {
      res.json(person);
    })
    .catch(error => next(error));
});

personRouter.get('/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      person ? response.json(person) : response.status(404).end();
    })
    .catch(error => next(error));
});

personRouter.post('/api/persons', (request, response, next) => {
  const body = request.body;

  if (body === undefined) {
    return response.status(400).json({ error: 'content missing' });
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

personRouter.delete('/api/persons/:id', (request, response) => {
  Person.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch(error => next(error));
});

personRouter.put('/api/persons/:id', (request, response, next) => {
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

module.exports = notesRouter