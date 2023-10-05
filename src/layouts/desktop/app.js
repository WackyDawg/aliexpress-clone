const express = require('express');
const dotenv = require('dotenv');
const { desktopConfig } = require('../../config/config');

// Use the configuration for the desktop view
const desktopLayoutVariation = desktopConfig.layoutVariation;

// Set the NODE_ENV environment variable based on your environment (e.g., "development" or "production")
process.env.NODE_ENV = "development"; // Change this to the desired environment

// Load the environment variables from the corresponding .env file
if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: "../../production.env" });
} else if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: "../../development.env" });
} else if (process.env.NODE_ENV === "test") {
  dotenv.config({ path: "../../test.env" });
}

const app = express();
const PORT = process.env.DESKTOP_PORT || 3002;

//Bring In The Middlewares
app.use(require('express-status-monitor')());

app.get('/', (req, res) => {
    if (desktopLayoutVariation === 1) {
      // Render layout variation 1 for desktop
      res.send('Desktop Layout Variation 1');
    } else {
      // Render layout variation 2 for desktop
      res.send('Desktop Layout Variation 2');
    }
  });

app.listen(PORT, (req ,res)=>{
    console.log(`🚀 Server is Up and Running on Port ${PORT}`);
})

module.exports = app;