const mongoose = require('mongoose');

const tradeComponentSchema = new mongoose.Schema({
  formatTradeCount: {
    type: String,
    default: '0',
    required: true
  },
  tradeCountUnit: {
    type: String,
    default: 'sold',
    required: true
  }
});

const TradeComponent = mongoose.model('TradeComponent', tradeComponentSchema);

module.exports = TradeComponent;
