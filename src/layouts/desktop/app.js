const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const { desktopConfig } = require("../../config/config");
const { envConfig } = require("../../config/env-config");

// Use the configuration for the desktop view
const desktopVariation = desktopConfig.desktopVariation;

//Use the configuration for the environment variables(.env files)
const envVariation = envConfig.envVariation;

// Load the environment variables from the corresponding .env file
if (envVariation === "production") {
  dotenv.config({ path: "../../production.env" });
} else if (envVariation === "development") {
  dotenv.config({ path: "../../development.env" });
} else if (envVariation === "test") {
  dotenv.config({ path: "../../test.env" });
}

const app = express();
const IPAddress = process.env.DESKTOP_IP || "192.168.0.1";
const PORT = process.env.DESKTOP_PORT || 3002;

//Bring in our view engine(ejs)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Bring In The Middlewares
app.use(require("express-status-monitor")());
app.use(express.urlencoded({ extended: true }));
app.use(require("./middlewares/404Middleware")());

app.get("/", (req, res) => {
  if (desktopVariation === 0) {
    res.render("maintenance/index");
  } else if (desktopVariation === 1) {
    res.render("default-layout/index");
  } else if (desktopVariation === 2) {
    res.render("blackfriday-layout/index");
  } else {
    res.render("default-layout/index");
  }
});

app.listen(PORT, IPAddress, (req, res) => {
  console.log(
    `🚀Desktop Server is Up and Running on http://${IPAddress}:${PORT}`
  );
});

module.exports = app;
