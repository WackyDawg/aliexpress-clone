const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

function generateRequestId() {
  const characters = '0123456789ABCDEF';
  let requestId = '';

  for (let i = 0; i < 24; i++) { 
    const randomIndex = Math.floor(Math.random() * characters.length);
    requestId += characters.charAt(randomIndex);
  }

  return requestId;
}


app.use((req, res, next) => {
  if (req.url === '/') {
    const requestId = generateRequestId();
    const hostUrl = `${req.protocol}://${req.get('host')}`;
    const ipAddress = req.originalUrl;

    const errorXmlFilePath = path.join(__dirname, '../public/errors', 'error.xml');

    try {
      const data = fs.readFileSync(errorXmlFilePath, 'utf8');

      const errorXml = data
        .replace('{REQUEST_ID}', requestId)
        .replace('{IP_ADDRESS}', ipAddress)
        .replace('{HOST_URL}', hostUrl);

      res.status(403).set('Content-Type', 'application/xml').send(errorXml);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  } else {
    next();
  }
});


module.exports = app;
