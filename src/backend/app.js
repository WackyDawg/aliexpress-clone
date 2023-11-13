const express = require("express");
const dotenv = require("dotenv");
const mongoose = require('./config/database-config');
const { envConfig } = require('../config/env-config');


const envVariation = envConfig.envVariation;
const app = express();

// Set the NODE_ENV environment variable based on your environment (e.g., "development" or "production")
//process.env.NODE_ENV = "development"; // Change this to the desired environment

// Load the environment variables from the corresponding .env file
if (envVariation === "production") {
  dotenv.config({ path: "../production.env" });
} else if (envVariation === "development") {
  dotenv.config({ path: "../development.env" });
} else if (envVariation === "test") {
  dotenv.config({ path: "../test.env" });
}

//define all environment variables here
const IPAddress = process.env.BACKEND_IP || '127.92.23.3';
const PORT = process.env.BACKEND_PORT || 3000;
const API_H5 = process.env.API_H5_ENDPOINT;
const API_VERSION = process.env.API_VERSION;

//Bring In The Middlewares
app.use(require("express-status-monitor")());

//bring in the routes
const productRoutes = require("./api/routes/productRoutes");
const miscRoutes = require('./api/routes/miscRoutes')
app.use(`${API_H5}`, productRoutes,miscRoutes);

app.listen(PORT, IPAddress, () => {
  //console.log(API_H5);
  console.log(`🚀Backend Server is Up and Running on http://${IPAddress}:${PORT}`);
});

module.exports = app;

