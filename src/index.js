const express = require('express');

const app = express();

//const Ipaddress = process.env.Ipaddress || '127.0.0.1';
const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('hello world!!');
})

app.listen(PORT, ()=>{
   console.log(`🚀Express Server is Up and Running on ${PORT}`)
})