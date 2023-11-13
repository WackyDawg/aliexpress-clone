const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const referComponentSchema = new Schema({
    
});

const ReferComponent = mongoose.model('ReferComponent', referComponentSchema);

module.exports = ReferComponent;
