// blog list backend
const express = require('express');
const app = express();
const cors = require('cors');
const blogRouter = require('./controllers/blogs');
const config = require('./utils/config')
require('express-async-errors')

app.use(cors());
app.use(express.json());

app.use('/', blogRouter);

module.exports = app
