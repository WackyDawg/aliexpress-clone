const mongoose = require('mongoose');

const marketingInfo4ChoiceComponentSchema = new mongoose.Schema({
  bgColorStart: {
    type: String,
    required: false,
    default: '#FFF5CA',
  },
  bgColorEnd: {
    type: String,
    required: false,
    default: '#FFDD64',
  },
  blockIcon: {
    type: {
      type: String,
      enum: ["icon"],
    },
    value: {
      type: String,
      required: false,
      default: '',
    },
  },
});

const MarketingInfo4ChoiceComponent = mongoose.model('MarketingInfo4ChoiceComponent', marketingInfo4ChoiceComponentSchema);

module.exports = MarketingInfo4ChoiceComponent;
