const express = require("express");
const dotenv = require("dotenv");
const atrRoute = require("./routes/attractionsRouter");
const cors = require('cors');
const path = require('path');

//------------------------Attractions WS Server------------------------------------------//
dotenv.config();
var db = require('./configs/database');
//database seeding
require('./seeder/attractionsSeeder');
var app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
//Allowing get requests (access) from any unknown domains 
app.use(cors());

// setup route path
app.use("/api", atrRoute);

app.get('/', function(req, res) {
  res.redirect('/api');
});

// listen for requests
var server = app.listen(process.env.PORT, () => {
  console.log(`===== Server is running on port ${process.env.PORT}! =====`);
});

process.once('SIGTERM', async () => {
  await db.dbDisconnect();
  server.close(() => {
    console.log('===== Server closed =====')
    process.exit(0);
  });
});

module.exports = app;
