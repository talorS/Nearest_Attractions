const express = require("express");
const dotenv = require("dotenv");
const atrRoute = require("./routes/attractionsRouter");
const cors = require('cors');

//------------------------Pets WS Server------------------------------------------//
dotenv.config();
var db = require('./configs/database');
//database seeding
require('./seeder/attractionsSeeder');
var app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Allowing get requests (access) from any unknown domains 
app.use(cors());

// setup route path
app.use("/api", atrRoute);

// listen for requests
const port = process.env.PORT || 8080;
var server = app.listen(port, () => {
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
