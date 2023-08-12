const express = require('express');
const { config } = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routeHandler = require('./routes/handler.js');
const App = express();
config();

App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());

App.use('/', routeHandler);

// ... Other configuration, including database connection ...

const PORT = process.env.PORT || 5001;
App.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
