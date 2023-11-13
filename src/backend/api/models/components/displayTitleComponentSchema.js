const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const displayTitleComponentSchema = new Schema({
    origTitle: {
        type: Boolean,
        required: true
    },
    orig: {
        type: Boolean,
        required: true
    },
    transTitle: {
        type: Boolean,
        required: true
    },
    trans: {
        type: Boolean,
        required: true
    }
});

const DisplayTitleComponent = mongoose.model('DisplayTitleComponent', displayTitleComponentSchema);

module.exports = DisplayTitleComponent;
