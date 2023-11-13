const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoryTagComponentSchema = new Schema({
    falseHair: {
        type: Boolean,
        required: true
    },
    cardCoupon: {
        type: Boolean,
        required: true
    },
    giftCard: {
        type: Boolean,
        required: true
    }
});

const CategoryTagComponent = mongoose.model('CategoryTagComponent', categoryTagComponentSchema);

module.exports = CategoryTagComponent;
