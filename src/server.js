'use strict';

const express = require('express');
const PORT = process.env.PORT || 3002;

const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500.js');

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).send('Base Endpoint Proof of Life!');
});

app.get('/person', validator, (req, res) => {
  console.log('Name Endpoint Proof of Life');
  res.status(200).json(`Hello! Nice to meet you ${req.query.person}.`);
});

app.use(logger);

app.use('*', notFound);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => console.log(`listening on port: ${PORT}`))
}

module.exports = { start, app }

console.log('Global Proof of life');