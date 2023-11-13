const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userComponentSchema = new Schema({
    currentTime: {
        type: Number,
        required: true
    },
    regionCountryName: {
        type: String,
        required: true
    },
    userCountryName: {
        type: String,
        required: true
    },
    userCountryCode: {
        type: String,
        required: true
    }
});

const UserComponent = mongoose.model('UserComponent', userComponentSchema);

module.exports = UserComponent;
