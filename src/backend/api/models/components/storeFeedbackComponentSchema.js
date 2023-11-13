const mongoose = require('mongoose');

const storeFeedbackComponentSchema = new mongoose.Schema({
    sellerScore: {
        type: Number,
        required: true
    },

    sellerTotalNum: {
        type: Number,
        required: true
    },

    sellerLevel: {
        type: String,
        required: true
    },

    sellerPositiveRate: {
        type: String,
        required: true
    },

    sellerPositiveNum: {
        type: Number,
        required: true
    },

});

const StoreFeedbackComponent = mongoose.model('StoreFeedbackComponent', storeFeedbackComponentSchema);

module.exports = StoreFeedbackComponent;
