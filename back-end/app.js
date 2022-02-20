// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const toys = require('./controllers/toysController');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES

app.use('/toys', toys);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to My Spectrum');
});

app.get('*', (req, res) => {
  res.status(404).send("this is not the page you are looking for")
})

// EXPORT
module.exports = app;
