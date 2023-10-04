const express = require("express");
const dotenv = require("dotenv"); 

// Set the NODE_ENV environment variable based on your environment (e.g., "development" or "production")
process.env.NODE_ENV = "development"; // Change this to the desired environment

// Load the environment variables from the corresponding .env file
if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: "../production.env" });
} else if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: "../development.env" });
} else if (process.env.NODE_ENV === "test") {
  dotenv.config({ path: "../test.env" });
}

const PORT = process.env.BACKEND_PORT || 3000;
const app = express();

//Bring In The Middlewares
app.use(require('express-status-monitor')());

app.get("/", (req, res) =>{
   res.send("hello Api");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is Up and Running on Port ${PORT}`);
});


module.exports = app; 
