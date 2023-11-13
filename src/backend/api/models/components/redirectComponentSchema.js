const mongoose = require('mongoose');

const redirectComponentSchema = new mongoose.Schema({
    
});

const RedirectComponent = mongoose.model('RedirectComponent', redirectComponentSchema);

module.exports = RedirectComponent;
