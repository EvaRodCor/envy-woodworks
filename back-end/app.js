// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const woodlist = require('./controllers/woodlistController');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to wood works");
});

app.use('/woodlist', woodlist);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to Envy-Woodworks');
});

app.get('*', (req, res) => {
  res.status(404).send("this is not the page you are looking for")
})

// EXPORT
module.exports = app;
