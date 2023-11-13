const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/AliexpressB2B')
    .then(() => {
        console.log('Database Connection Is Ready...')
    })
    .catch((err) => {
        console.log(err)
    })