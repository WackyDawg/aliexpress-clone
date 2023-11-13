const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recommendComponentSchema = new Schema({
    similarPageSize: {
        type: Number,
        required: true
    },
    afChannel: {
        type: String,
        required: true
    },
    similarScenario: {
        type: String,
        required: true
    },
    hideStoreRecommend: {
        type: Boolean,
        required: true
    },
    hideTopSelling: {
        type: Boolean,
        required: true
    }
});

const RecommendComponent = mongoose.model('RecommendComponent', recommendComponentSchema);

module.exports = RecommendComponent;
