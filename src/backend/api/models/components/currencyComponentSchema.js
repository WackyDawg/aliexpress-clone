const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const currencyComponentSchema = new Schema({
    baseCurrencyCode: {
        type: String,
        required: true
    },
    enableTransaction: {
        type: Boolean,
        required: true
    },
    currencySymbol: {
        type: String,
        required: true
    },
    symbolFront: {
        type: Boolean,
        required: true
    },
    currencyRate: {
        type: Number,
        required: true
    },
    baseSymbolFront: {
        type: Boolean,
        required: true
    },
    currencyCode: {
        type: String,
        required: true
    },
    baseCurrencySymbol: {
        type: String,
        required: true
    },
    multiCurrency: {
        type: Boolean,
        required: true
    }
});

const CurrencyComponent = mongoose.model('CurrencyComponent', currencyComponentSchema);

module.exports = CurrencyComponent;
