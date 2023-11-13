const mongoose = require('mongoose');

const abTestComponentSchema = new mongoose.Schema({
  detailNewVersion: {
    type: Number,
    default: 1,
  },
  openDescHover: {
    type: Boolean,
    default: true,
  },
  hideCustomerService: {
    type: Boolean,
    default: false,
  },
  rmStoreLevelAB: {
    type: Boolean,
    default: true,
  }
});

const ABTestComponent = mongoose.model('ABTestComponent', abTestComponentSchema);

module.exports = ABTestComponent;
