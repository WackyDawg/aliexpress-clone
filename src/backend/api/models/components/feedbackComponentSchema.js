const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackComponentSchema = new Schema({
    positiveRate: {
        type: String,
        required: true
    },
    fiveStarNum: {
        type: Number,
        required: true
    },
    threeStarNum: {
        type: Number,
        required: true
    },
    twoStarRate: {
        type: Number,
        required: true
    },
    display: {
        type: Boolean,
        required: true
    },
    oneStarRate: {
        type: Number,
        required: true
    },
    fourStarNum: {
        type: Number,
        required: true
    },
    evarageStar: {
        type: String,
        required: true
    },
    fiveStarRate: {
        type: Number,
        required: true
    },
    threeStarRate: {
        type: Number,
        required: true
    },
    totalValidNum: {
        type: Number,
        required: true
    },
    evarageStarRage: {
        type: String,
        required: true
    },
    twoStarNum: {
        type: Number,
        required: true
    },
    trialReviewNum: {
        type: Number,
        required: true
    },
    oneStarNum: {
        type: Number,
        required: true
    },
    fourStarRate: {
        type: Number,
        required: true
    }
});

const FeedbackComponent = mongoose.model('FeedbackComponent', feedbackComponentSchema);

module.exports = FeedbackComponent;
