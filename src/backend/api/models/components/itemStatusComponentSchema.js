const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemStatusComponentSchema = new Schema({
    status: {
        type: Number,
        required: true
    }
});

const ItemStatusComponent = mongoose.model('ItemStatusComponent', itemStatusComponentSchema);

module.exports = ItemStatusComponent;
