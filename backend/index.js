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

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    const PORT = process.env.PORT || 5001;
    App.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

  const PORT = process.env.PORT || 5002; // Change the port number to 5002 or any other available port
  App.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
  